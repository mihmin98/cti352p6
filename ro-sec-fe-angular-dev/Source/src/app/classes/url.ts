export class Url{
    // Selection for url link
    // 0 fake json server
    // 1 backEnd server

    selectUrl = 0;

    url;
    urlAddtransaction;
    urlDeletetransaction;
    urlGettransaction;
    urlGetbook;
    urlGetclient;
    urlGettransactionAfterId;
    urlAddUser;
    urlLogin;
    urlLogout;

    urlBackendtransaction = 'http://localhost:4500/';
    urlBackendUser = 'http://localhost:5000/';

    urlFakeJsonFile = 'http://localhost:3500/';

    getUrlAddtransaction(){
      this.urlAddtransaction = this.urlFakeJsonFile.concat('transactions');

      if (this.selectUrl === 1)
      {
         this.urlAddtransaction = this.urlBackendtransaction.concat('transaction/add');
      }

      return this.urlAddtransaction;
    }

    getUrlDeletetransaction(){
      this.urlDeletetransaction = this.urlFakeJsonFile.concat('transactions');

      if (this.selectUrl === 1)
      {
         this.urlDeletetransaction = this.urlBackendtransaction.concat('transaction/delete');
      }

      return this.urlDeletetransaction;
    }

    getUrlGettransactionAfterId(){
      this.urlGettransactionAfterId = this.urlFakeJsonFile.concat('transactions');

      if (this.selectUrl === 1)
      {
         this.urlGettransactionAfterId = this.urlBackendtransaction.concat('transaction/get');
      }

      return this.urlGettransactionAfterId;
    }

    getUrlGettransactions(){
      this.urlGettransaction = this.urlFakeJsonFile.concat('transactions');

      if (this.selectUrl === 1)
      {
         this.urlGettransaction = this.urlBackendtransaction.concat('transaction/all');
      }

      return this.urlGettransaction;
    }

    getUrlGetbooks(){
      this.urlGetbook = this.urlFakeJsonFile.concat('books');

      if (this.selectUrl === 1)
      {
         this.urlGetbook = this.urlBackendtransaction.concat('book/all');
      }

      return this.urlGetbook;
    }

    getUrlGetclients(){
      this.urlGetclient = this.urlFakeJsonFile.concat('clients');

      if (this.selectUrl === 1)
      {
         this.urlGetclient = this.urlBackendtransaction.concat('client/all');
      }

      return this.urlGetclient;
    }

    getUrlUpdatetransaction(){
      this.urlGettransactionAfterId = this.urlFakeJsonFile.concat('transactions');

      if (this.selectUrl === 1)
      {
         this.urlGettransactionAfterId = this.urlBackendtransaction.concat('transaction/update');
      }

      return this.urlGettransactionAfterId;
    }

    getUrlAddUser(){
      this.urlAddUser = this.urlFakeJsonFile.concat('users');

      if (this.selectUrl === 1)
      {
         this.urlAddUser = this.urlBackendUser.concat('user/add');
      }

      return this.urlAddUser;
    }

    getUrlLogin(){
      this.urlLogin = this.urlFakeJsonFile.concat('users');

      if (this.selectUrl === 1)
      {
         this.urlLogin = this.urlBackendUser.concat('user/login');
      }

      return this.urlLogin;
    }

    getUrlLogout(){
      this.urlLogout = this.urlFakeJsonFile.concat('users');

      if (this.selectUrl === 1)
      {
         this.urlLogout = this.urlBackendUser.concat('user/logout');
      }

      return this.urlLogout;
    }
}
