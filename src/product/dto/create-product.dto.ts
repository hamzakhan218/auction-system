enum PRODUCTSTATUS {
    LIVE,
    SOLD,
    DELIVERED
}

export class Product {
    name: string
    description: string
    ownerId: number
    minimumBidAmount: number
    status: PRODUCTSTATUS
    creationDate: Date
}