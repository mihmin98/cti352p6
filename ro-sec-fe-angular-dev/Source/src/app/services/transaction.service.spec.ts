// import { TestBed, getTestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpErrorResponse} from '@angular/common/http';
// import { Url } from '../classes/url';

// //import { transactionService } from './transaction.service';

// describe('transactionService', () => {
//   let service: transactionService;
//   let httpMock: HttpTestingController;
//   let url: string;
//   let urlSelect;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: []
//     });
//     service = TestBed.inject(transactionService);
//     httpMock = getTestBed().inject(HttpTestingController);
//     urlSelect = new Url();
//     urlSelect.urlFakeJsonFile = 'http://localhost:3500/';
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it ('should delete transaction information', () => {
//   const transactionId = '1';
//   const transactionDummy = {id: '1',
//                         firstName: 'viorel',
//                         lastName: 'voichita',
//                         cnp: '12345678901234',
//                         seria: 'TZ',
//                         number: '123456',
//                         gender: 'male',
//                         dob: '23/12/2020',
//                         supplier: 'Med',
//                         subscription: 'sub details',
//                         obs: 'none',
//                         history: 'adasdas'};
//   url = urlSelect.getUrlDeletetransaction();

//   service.deletetransaction(transactionId).subscribe(message => {
//     expect(transactionId).toEqual(transactionDummy.id);
//     });

//   const request = httpMock.expectOne(`${url}/${transactionId}`);
//   expect(request.request.method).toBe('DELETE');
//   request.flush(transactionDummy);
//   });

//   it('should throws 404 error', () => {
//     const transactionId = '1';
//     url = urlSelect.getUrlDeletetransaction();

//     service.deletetransaction(transactionId).subscribe(
//       data => fail('Should have failed with 404 error'),
//       (error: HttpErrorResponse) => {
//         expect(error.status).toEqual(404);
//         expect(error.error).toContain('404 error');
//       }
//     );

//     const request = httpMock.expectOne(`${url}/${transactionId}`);
//     expect(request.request.method).toBe('DELETE');

//     request.flush('404 error', { status: 404, statusText: 'Not Found' });
//   });

//   it('should retrive transaction information after id', () => {
//   url = urlSelect.getUrlGettransactionAfterId();
//   const transactionId = '1';
//   const transactionDummy = {id: '1',
//                         firstName: 'viorel',
//                         lastName: 'voichita',
//                         cnp: '12345678901234',
//                         seria: 'TZ',
//                         number: '123456',
//                         gender: 'male',
//                         dob: '23/12/2020',
//                         supplier: 'Med',
//                         subscription: 'sub details',
//                         obs: 'none',
//                         history: 'adasdas'};

//   service.getPacientAfterId(transactionId).subscribe(retriveInfo => {
//     expect(retriveInfo).toEqual(transactionDummy);
//     expect(retriveInfo.id).toEqual(transactionId);
//     });

//   const request = httpMock.expectOne(`${url}/${transactionId}`);
//   expect(request.request.method).toBe('GET');
//   request.flush(transactionDummy);
//   });

//   it ('should update transaction information', () => {
//   url = urlSelect.getUrlUpdatetransaction();
//   const transactionDummy = {id: '1',
//                         firstName: 'viorel',
//                         lastName: 'voichita',
//                         cnp: '12345678901234',
//                         seria: 'TZ',
//                         number: '123456',
//                         gender: 'male',
//                         dob: '23/12/2020',
//                         supplier: 'Med',
//                         subscription: 'sub details',
//                         obs: 'none',
//                         history: 'adasdas'};

//   service.updatePacientInfo(transactionDummy).subscribe(message => {
//     });

//   const request = httpMock.expectOne(`${url}/${transactionDummy.id}`);
//   expect(request.request.method).toBe('PUT');
//   });

//   it('should retrive all transaction information', () => {
//     url = urlSelect.getUrlGettransactions();
//     const transactionDummy = [{id: '1',
//                           firstName: 'viorel',
//                           lastName: 'voichita',
//                           cnp: '12345678901234',
//                           seria: 'TZ',
//                           number: '123456',
//                           gender: 'male',
//                           dob: '23/12/2020',
//                           supplier: 'Med',
//                           subscription: 'sub details',
//                           obs: 'none',
//                           history: 'adasdas'}];

//     service.gettransactions().subscribe(retriveInfo => {
//       expect(retriveInfo).toEqual(transactionDummy);
//       });

//     const request = httpMock.expectOne({url});
//     expect(request.request.method).toBe('GET');
//     request.flush(transactionDummy);
//     });

//   it('should add transaction information', () => {
//     url = urlSelect.getUrlAddtransaction();
//     const transactionDummy = {id: '2',
//                           firstName: 'viorel',
//                           lastName: 'voichita',
//                           cnp: '12345678901234',
//                           seria: 'TZ',
//                           number: '123456',
//                           gender: 'male',
//                           dob: '23/12/2020',
//                           supplier: 'Med',
//                           subscription: 'sub details',
//                           obs: 'none',
//                           history: 'adasdas'};

//     service.addtransaction(transactionDummy).subscribe(retriveInfo => {
//       expect(retriveInfo.id).toEqual(transactionDummy.id);
//       });

//     const request = httpMock.expectOne({url});
//     expect(request.request.method).toBe('POST');
//     request.flush(transactionDummy);
//     });

//   it('should generate correct url back end', () => {
//     urlSelect.urlBackendtransaction = 'http://backendhost:1000/';
//     urlSelect.selectUrl = 1;

//     let urlGenerate = urlSelect.getUrlAddtransaction();
//     expect(urlGenerate).toEqual('http://backendhost:1000/transaction/add');

//     urlGenerate = urlSelect.getUrlDeletetransaction();
//     expect(urlGenerate).toEqual('http://backendhost:1000/transaction/delete');

//     urlGenerate = urlSelect.getUrlGettransactionAfterId();
//     expect(urlGenerate).toEqual('http://backendhost:1000/transaction/get');

//     urlGenerate = urlSelect.getUrlGettransactions();
//     expect(urlGenerate).toEqual('http://backendhost:1000/transaction/all');

//     urlGenerate = urlSelect.getUrlUpdatetransaction();
//     expect(urlGenerate).toEqual('http://backendhost:1000/transaction/update');
//   });

// });
