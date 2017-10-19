declare module "material-pickers-time" {

    export interface TimePickerOptions
    {
        /**
         * Military is 24H, standard is 12H
         */
        timeFormat?: 'standard'|'military';

        /** This is not yet documented */
        autoNext?: boolean;
    }

    export type EventName = 'show' | 'hide' | 'hourSelected' | 'minuteSelected';

    export interface TimePickerEvents
    {
        on(event: EventName, handler: ()=>void): void;
        off(event: EventName): void;
        trigger(event: EventName, params?: any): void;
    }

    /** Implements a material time picker */
    export class TimePicker
    {
        events: TimePickerEvents;
        bindInput(element: string | HTMLElement, options?: TimePickerOptions): void;
        openOnInput(element: string | HTMLElement, options?: TimePickerOptions): void;
    }
}
