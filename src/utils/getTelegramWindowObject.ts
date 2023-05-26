export const getTelegramWindowObject = () => {
    if(typeof window !== 'undefined')
        return window.Telegram?.WebApp
}