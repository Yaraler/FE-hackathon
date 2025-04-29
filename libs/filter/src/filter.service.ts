import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { HttpException } from '@nestjs/common';

@Catch(HttpException)
export class RpcHttpExceptionFilter implements RpcExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost): Observable<any> {
    const status = exception.getStatus();
    const response = exception.getResponse();

    const message =
      typeof response === 'string'
        ? response
        : (response as any)?.message || 'Unexpected error';

    return throwError(() => ({
      statusCode: status,
      message,
    }));
  }
}
