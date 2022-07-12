export interface Posts {
    id: number;
    createdAt?: Date | undefined;
    updateAt?: Date;
    title: string;
    text: string;
    coverUrl: string;
    isBookEssay: boolean;
    likeNumber: number;
}