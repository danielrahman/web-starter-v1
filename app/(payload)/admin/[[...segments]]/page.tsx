import {
  generatePayloadAdminMetadata as generateMetadata,
  renderPayloadAdminView,
  type PayloadAdminViewArgs,
} from './view'

export { generateMetadata }

export default async function PayloadAdminPage(args: PayloadAdminViewArgs) {
  return renderPayloadAdminView('RootPage', args)
}
