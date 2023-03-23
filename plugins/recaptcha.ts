import { defineNuxtPlugin } from '#app'
import type { ReCaptchaInstance } from '~~/types/recaptcha'

declare namespace grecaptcha {
    /**
     * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
     * @param container The HTML element to render the reCAPTCHA widget. Specify either the ID of the container (string) or the DOM element itself.
     * @param parameters An object containing parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "light"}. See @see render parameters.
     * @param inherit Invisible reCAPTCHA only. Use existing data-* attributes on the element if the corresponding parameter is not specified.
     * The values in parameters will take precedence over the attributes.
     * @return the ID of the newly created widget.
     */
    function render(container: (string | HTMLElement), parameters?: {siteKey: string}, inherit?: boolean): number;
    /**
     * Resets the reCAPTCHA widget.
     * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
     */
    function reset(opt_widget_id?: number): void;
    /**
     * Gets the response for the reCAPTCHA widget.
     * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
     * @return the response of the reCAPTCHA widget.
     */
    function getResponse(opt_widget_id?: number): string;
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @param siteKey the key of your site
     * @param action the action
     *
     * @return a promise-like object containing the token
     */
    function execute(siteKey: string, options: {action: string}): PromiseLike<string>;
    /**
     * will run the given function as soon as the reCAPTCHA library has loaded
     * @param callback the function to coll
     */
    function ready(callback: () => void): void;
}

export default defineNuxtPlugin((nuxtApp) => {
  // eslint-disable-next-line no-console
  const config = useRuntimeConfig().public.recaptcha
  class ReCaptchaObject implements ReCaptchaInstance {
    version: number
    siteKey: string

    constructor(version: number, siteKey: string) {
      this.version = version
      this.siteKey = siteKey
    }

    execute(action: string, callback: CallableFunction): void {
      grecaptcha.execute(config.siteKey, {action: action})
      .then((token: string) => {
        callback(token)
      })
      
    }
  }

  return {
    provide: {
      recaptcha: {
        init(): ReCaptchaObject {
          useHead({
            script: [
              {
                src: `https://www.google.com/recaptcha/api.js?render=${config.siteKey}`,
                body: true
              }
            ]
          })
          return new ReCaptchaObject(config.version, config.siteKey)
        }
      }
    }
  }
})