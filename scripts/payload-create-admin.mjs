import { ensureCmsEnabled, getDocId, readFlagValue, withPayload } from './_shared/payload-cli-utils.mjs'

const DEFAULT_ADMIN_EMAIL = 'admin@example.com'

ensureCmsEnabled('creating an admin user')

const emailInput = readFlagValue('--email') || DEFAULT_ADMIN_EMAIL
const password = readFlagValue('--password')
const resetPassword = process.argv.includes('--reset-password')
const email = emailInput?.trim().toLowerCase()

if (!email || !password) {
  console.error('Missing password. Use the --password flag.')
  console.error(`Default email is ${DEFAULT_ADMIN_EMAIL}.`)
  console.error('Example: npm run payload:create-admin -- --email "admin@example.com" --password "ChangeMe123!"')
  process.exit(1)
}

if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
  console.error(`Invalid email: ${email}`)
  process.exit(1)
}

if (password.length < 8) {
  console.error('Password must be at least 8 characters.')
  process.exit(1)
}

await withPayload(async (payload) => {
  const existing = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })

  const doc = Array.isArray(existing.docs) ? existing.docs[0] : null
  const docId = getDocId(doc)

  if (docId) {
    if (!resetPassword) {
      console.log(`Admin user already exists for ${email}. Use --reset-password to rotate credentials.`)
    } else {
      await payload.update({
        collection: 'users',
        id: docId,
        data: { password },
        overrideAccess: true,
      })

      console.log(`Admin user password updated for ${email}.`)
    }
  } else {
    await payload.create({
      collection: 'users',
      data: {
        email,
        password,
      },
      overrideAccess: true,
    })

    console.log(`Admin user created for ${email}.`)
  }
})
