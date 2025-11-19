
export interface CardProps {
    title: string;
    content: string
}

export interface ButtonProps {
    text: string;
    size: 'small' | 'medium' | 'large' ;
    shape: 'rounded-full' | 'rounded-md' | 'rounded-sm';
    onClick?: () => void;
}
export interface UserProps {
    id:number;
    name:string;
    email:string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };

}

export interface Post {
    id: number;
    title: string;
    content: string;

}
export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;

}