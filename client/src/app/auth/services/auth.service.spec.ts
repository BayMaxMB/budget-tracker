import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpService', ['post']);
    service = new AuthService(httpClientSpy);
  });

  it('AuthService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setSession have to call on success', (done: DoneFn) => {
    spyOn(service as any, 'setSession');
    const expectedResult = {
      idToken: 'idToken',
      expiresIn: 1000,
    };
    httpClientSpy.post.and.returnValue(of(expectedResult));
    service.login('test', 'psw').subscribe(() => {
      expect((service as any).setSession).toHaveBeenCalledOnceWith(
        expectedResult
      );
      done();
    });
  });

  it('on error', (done: DoneFn) => {
    spyOn(service as any, 'setSession');

    httpClientSpy.post.and.returnValue(throwError(() => '401'));
    service.login('test', 'psw').subscribe({
      error: (err) => {
        expect((service as any).setSession).not.toHaveBeenCalled();
        expect(err).toBe('401');
        done();
      },
    });
  });
});
