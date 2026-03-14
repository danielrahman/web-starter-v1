import {
  generatePayloadAdminMetadata as generateMetadata,
  renderPayloadAdminView,
  type PayloadAdminViewArgs,
} from './view'

export { generateMetadata }

export default async function PayloadNotFound(args: PayloadAdminViewArgs) {
  return renderPayloadAdminView('NotFoundPage', args)
}
