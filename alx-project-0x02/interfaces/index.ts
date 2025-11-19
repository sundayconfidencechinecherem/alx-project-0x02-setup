
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

export interface Post {
    id: number;
    title: string;
    content: string;

}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;

}