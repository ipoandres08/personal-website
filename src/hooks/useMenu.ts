
interface Menu {
    label: string;
    route: string;
    active: boolean;
}

const isActiveRoute = (route:string) => {
    const isActive = route === window.location.pathname || 
    window.location.pathname.includes(route);
    return isActive;
}
export const useMenu = (): Menu[] => {
    const menu = [
        {label: 'About', route:'/about', active: isActiveRoute('/about')},
        {label: 'Blog', route:'/blog', active: isActiveRoute('/blog')},
        {label: 'Contact', route: '/contact', active: isActiveRoute('/contact')},
        ];
    return menu;
}
