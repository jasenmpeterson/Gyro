if (document.querySelector('.resources--list') !== null) {
   let options = {
       valueNames: [
           'case_studies',
           'specs',
           'flyers',
           'articles',
           'tech_papers'
       ],
       page: 10,
       pagination: [{
           paginationClass: 'filter-pagination',
           innerWindow: 1,
           left: 0,
           right: 0
       }]
   }
   const list = new List('resource-list', options);
   const filterButtons = document.querySelectorAll('.filter-buttons button');
   const filterMessage = document.querySelector('.filter-list__messages');
   for(var button of filterButtons) {
        button.addEventListener('click', function(e) {
            let doctype = e.target.className;
            list.filter(function(item){
                if(item.elm.classList.contains(doctype)) {
                    return true;
                } else {
                    return false;
                }
            });
        });
   }
}
