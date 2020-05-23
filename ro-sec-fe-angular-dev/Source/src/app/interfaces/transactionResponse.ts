export interface ITransactionResponse{
    id: string;
    // firstName: string;
    // lastName: string;
    // cnp: string;
    // seria: string;
    // number: string;
    // gender: string;
    // dob: string;
    // supplier: string;
    // subscription: string;
    // obs: string;
    // history: string;
    // error: string[];
    // logError: boolean;

    clientId: string;
    bookId: string;
    price: string;
    rentalDate: string;
    returnDate: string;
    rentalDuration: string;
    error: string[];
    logError: boolean;

}
