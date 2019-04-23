class Requete {
  constructor(successData, failedData) {
    this.url = "http://memogetdatatest.coopernet.fr/get.php";
    this.getData(successData, failedData);
  }
  getData = (successData, failedData) => {
    const req = new XMLHttpRequest();
    req.open("GET", this.url, true);
    req.send(null);
    req.onload = event => {
      this.afterLoad(event, req, successData, failedData);
    };
    req.onerror = event => {
      this.onError(event, req, successData, failedData);
    };
  };
  afterLoad = (event, req, successData, failedData) => {
    // On test directement le status de notre instance de XMLHttpRequest
    if (req.status === 200) {
      // transformation du texte obtenu en objet js
      let data = JSON.parse(req.responseText).data;
      successData(data);
    } else {
      // On y est pas encore, voici le statut actuel
      console.log("Statut actuel", req.status, req.statusText);
      failedData();
    }
  };
  onError = (event, req, successData, failedData) => {
    failedData();
  }
}

export default Requete;
