export interface EmailBody {
    body: {
        name: string,
        intro: string,
        table: {
            data: Array<{
                    name: string,
                    description: string,
                    price: string
                }>
        }
        outro?: string
    }
}