declare module "material-pickers-time" {

    export interface TimePickerOptions
    {
        /**
         * Military is 24H, standard is 12H
         */
        timeFormat: 'standard'|'military';

        /** This is not yet documented */
        autoNext: boolean;
    }

    /** Implements a material time picker */
    export interface TimePicker
    {
        bindInput(element: string | HTMLElement, options?: TimePickerOptions): void;
        openOnInput(element: string | HTMLElement, options?: TimePickerOptions): void;
    }
}
