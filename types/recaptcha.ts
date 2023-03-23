export interface ReCaptchaInstance {
    version: number
    siteKey: string
    execute(action: string, callback: CallableFunction): void
}
