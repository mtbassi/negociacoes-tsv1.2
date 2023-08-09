export function domInjector(seletor: string){
    return function(
        target: any,
        propertyKey: string,
    ){
        const getter = function(): HTMLElement{
            const elemento = document.querySelector(seletor) as HTMLElement;
            return elemento;
        } 
        
        Object.defineProperty(target, propertyKey, {get: getter});
    }
}