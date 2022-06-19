export interface NavigatorInterface {
    logo: ImageInterface;
    links: LinksInterface[]
}

export interface ImageInterface {
    src: string,
    alt: string
}

 export interface LinksInterface {
     text: string;
     link: string;
 }


 export interface HeroInterface {
     title: string;
     contents: ContentsInterface[]
 }

 export interface ContentsInterface {
     number: string;
     item: ImageInterface
 }

 export interface GroupsInterface {
    title: string; 
    images: ImageInterface[]
 }