export class Connection {

    private id: number

    constructor(id: number) {
        this.id = id
    }

    Disconnect() {
        console.log(`Connection number: ${this.id} disconnected`)
    }
}