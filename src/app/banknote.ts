export class banknote {
    id: number;
    type: string;
    currency: string;
    quantity: number;

    constructor(id: number, type: string, currency: string, quantity: number) {
        this.id = id;
        this.type = type;
        this.currency = currency;
        this.quantity = quantity;
    }

    public toString(): string {
        return this.quantity +  " banknotes of " + this.type + " " + this.currency;
    }
}