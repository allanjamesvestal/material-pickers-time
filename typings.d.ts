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

    export interface TimeSelectedEvent
    {
        hours: string;
        minutes: string;
        meridiem: string;
        value: string;
    }
    
    export interface TimePickerEvents
    {
        on(event: EventName, handler: ()=>void): void;
        on(event: 'timeSelected', handler: (event: TimeSelectedEvent)=>void): void;
        off(event: EventName | 'timeSelected'): void;
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
