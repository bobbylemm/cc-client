export interface OrderType {
    address: {
        street: string;
        city: string;
        country: string;
    };
    customer: {
        name: string;
        email: string;
        phone: string;
    };
    title: string;
    bookingDate: string | number;
}