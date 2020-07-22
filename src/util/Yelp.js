const apiKey ='bkQFPn5xQGQ96orvgL2yvoS9pvxTHLuRiUtdRKAt3QLfvWbIHUmOppKn-ugV93faGCRfN-qsHwF0fOih24EslYreLKz8bjPC71cZZ6vnfg_rR_O9UA6vpJSBkUoTX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(jsonResponse => {
      console.log(jsonResponse);
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    })
  }
};


export default Yelp;