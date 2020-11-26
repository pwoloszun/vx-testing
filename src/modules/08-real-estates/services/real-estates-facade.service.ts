import api, { RealEstate } from '@/api/real-estates-api';

class RealEstatesFacadeService {
  public selectedRealEstate: RealEstate | null = null;
  public realEstates: RealEstate[] = [];

  fetch() {
    this.reset();
    api.getAll().then((realEstates) => {
      this.realEstates = realEstates;
    });
  }

  toggleRealEstate(estate) {
    if (this.selectedRealEstate === estate) {
      this.reset();
    } else {
      this.selectedRealEstate = estate;
    }
  }

  private reset() {
    this.selectedRealEstate = null;
  }
}

const realEstatesFacade = new RealEstatesFacadeService();

export default realEstatesFacade;
