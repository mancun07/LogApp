import React, {useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const ButtonSet = () => {

    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      })  

    return (
<div class="fixed-action-btn">
  <a href="#modal1" class="btn-floating btn-large red modal-trigger">
    <i class="large material-icons">add</i>
  </a>
  <ul>
    <li><a href="#techModal" class="btn-floating blue modal-trigger"><i class="material-icons">person</i></a></li>
    <li><a href="#addTechModal" class="btn-floating green modal-trigger"><i class="material-icons">person_add</i></a></li>
  </ul>
</div>
    )
}

export default ButtonSet
