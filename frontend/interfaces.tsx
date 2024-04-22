export interface IElectronAPI {
    loadPreferences: () => Promise<void>
}

export interface IUser {
    uuid?: string
    username?: string
    firstName?: string
    lastName?: string
    email?: string
}

export interface IClient {
    id?: string
    name?: string
    address?: string
    email?: string
    website?: string
    userUUID?: string
}

export interface IInvoice {
    id: string
    invoiceNo: string
    invoiceDate: string
    invoiceDue: string
    userUUID: string
    clientID: string
}

export interface IInvoiceTemplate {
    title?: string
    from?: {
        firstName?: string
        lastName?: string
        address?: string
        email?: string
        contact?: string
        taxRegistrationNumber?: string
        invoiceDate?: string
    }
    to?: {
        businessName?: string
        address?: string
        email?: string
        website?: string
        invoiceDue?: string
    }
    bankDetails?: {
        accountHolder?: string
        iban?: string
        bank?: string
        email?: string
    }
}