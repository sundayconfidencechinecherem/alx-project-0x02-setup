
export interface CardProps {
    title: string;
    content: string
}

export interface ButtonProps {
    text: string;
    className: string;
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