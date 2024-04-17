export interface IElectronAPI {
    loadPreferences: () => Promise<void>
}

export interface IUser {
    username: string
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