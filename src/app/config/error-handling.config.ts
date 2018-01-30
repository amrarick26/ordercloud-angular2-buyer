import { ErrorHandler, Inject, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export class AppErrorHandler extends ErrorHandler {
    constructor( @Inject(Injector) private readonly injector: Injector) {
        super();
    }

    public handleError(ex: any): void {
        let message = '';
        if (ex && ex.error && ex.error.Errors && ex.error.Errors.length) {
            const e = ex.error.Errors[0];
            message = e.ErrorCode === 'NotFound' ? e.Data.ObjectType + ' ' + e.Data.ObjectID + ' not found.' : e.Message;
        } else if (ex && ex.error && ex.error['error_description']) {
            message = ex.error['error_description'];
        } else if (ex.error) {
            message = ex.error;
        } else if (ex.message) {
            message = ex.message;
        } else {
            message = 'An error occurred';
        }
        this.toastrService.error(message, 'Error', { onActivateTick: true });
        super.handleError(ex);
    }

    /**
     * Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
     */
    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }
}
