$(document).ready(function(){

  $('.details__form-boxinput input[type=file]').on('change', function(){
    let file = this.files[0];
    $(this).next().html(file.name);
  });

  $('.details__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('details__form-svg--active')
    $('.details__form-container').slideToggle()
  })

  $('.summary__btn-box').on('click', function (e) {
    e.preventDefault()
    $('.summary__btn-style').toggleClass('summary__btn-style--active')
    $('.summary__btn-slider').toggleClass('summary__btn-slider--active')
  })
  $('.summary__btn-resumebox').on('click', function (e) {
    e.preventDefault()
    $('.summary__resumebtn-style').toggleClass('summary__resumebtn-style--active')
    $('.summary__resumebtn-slider').toggleClass('summary__resumebtn-slider--active')
  })

  $('.history__btn-box').on('click', function (e) {
    e.preventDefault()
    $('.history__btn-style').toggleClass('history__btn-style--active')
    $('.history__btn-slider').toggleClass('history__btn-slider--active')
  })
  
  $('.education__btn-box').on('click', function (e) {
    e.preventDefault()
    $('.education__btn-style').toggleClass('education__btn-style--active')
    $('.education__btn-slider').toggleClass('education__btn-slider--active')
  })
  $('.skillach__btn-box').on('click', function (e) {
    e.preventDefault()
    $('.skillach__btn-style').toggleClass('skillach__btn-style--active')
    $('.skillach__btn-slider').toggleClass('skillach__btn-slider--active')
  })

  // $('.skills__checkbox-wrapper').on('click', function (e) {
  //   e.preventDefault()
  //   $('.skills__checkbox-style').toggleClass('skills__checkbox-style--active')
  //   $('.skills__checkbox-slider').toggleClass('skills__checkbox-slider--active')
  // })

  $('.objectives__checkbox-wrapper--resume').on('click', function (e) {
    e.preventDefault()
    $('.objectives__checkbox-style--resume').toggleClass('objectives__checkbox-style--active')
    $('.objectives__checkbox-slider--resume').toggleClass('objectives__checkbox-slider--active')
  })
  $('.objectives__checkbox-wrapper--optimized').on('click', function (e) {
    e.preventDefault()
    $('.objectives__checkbox-style--optimized').toggleClass('objectives__checkbox-style--active')
    $('.objectives__checkbox-slider--optimized').toggleClass('objectives__checkbox-slider--active')
  })





  $('.history__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('history__form-slider--active')
    $('.history__form-heading').toggleClass('history__form-heading--active')
    $('.history__form-main').slideToggle()
  })
  $('.education__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('education__form-slider--active')
    $('.education__form-heading').toggleClass('education__form-heading--active')
    $('.education__form-main').slideToggle()
  })
  $('.accounts__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('accounts__form-slider--active')
    $('.accounts__form-row').slideToggle()
  })
  $('.languages__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('languages__form-slider--active')
    $('.languages__form-row').slideToggle()
  })
  $('.cources__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('cources__form-slider--active')
    $('.cources__form-main').slideToggle()
  })
  $('.hobbies__form-slider').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('hobbies__form-slider--active')
    $('.hobbies__form-main').slideToggle()
  })

// =========== BURGER-MENU ==========
$('.burger, .header__enter-avatar').on('click', function (e) {
  e.preventDefault()
  $('.burger__menu').addClass('burger__menu--active')
})


$('.resume__heading, .resume__content, .editor__btn-box, .editor__content, .burger__menu-item, .burger__menu-exit, .main__enter').on('click', function(e) {
  $('.burger__menu').removeClass('burger__menu--active')
})
// =========== RESUME__EDITOR-BTN ==========
setInterval(() => {
  if ($(window).scrollTop() > 0 ) {
    $('.resume__editor-text').addClass('resume__editor-text--follow')
  } else {
    $('.resume__editor-text').removeClass('resume__editor-text--follow')
  }
}, 0)
// =========== POPUP ================
$('.popup__content-btn').on('click', function(e) {
  $('.popup').addClass('popup--unshow')
  $('.wrapper').removeClass('wrapper--scroll')
})



// =========== HISTORY ==============
  document.querySelector(".history__block-add").addEventListener("click", function() {
    if (document.querySelectorAll(".history__wrapper").length == 1 && document.querySelector(".history__wrapper").style.display == "none"){
      document.querySelector(".history__wrapper").style.display = "flex";
    }
    else {
      var copy = document.querySelector(".history__wrapper").cloneNode(true);
      document.querySelector(".history__container").appendChild(copy);
      clearHistory();
      copy.querySelector('.history__btn-delete').addEventListener("click", function(){
        removeWrapperHistory(this);
      })
    }
  });
  document.querySelector('.history__btn-delete').addEventListener("click", function(){
    removeWrapperHistory(this);
});


function removeWrapperHistory(history){
  if (document.querySelectorAll(".history__wrapper").length > 1){
    history.parentElement.remove();
  }
  else {
    history.parentElement.style.display = "none";
  }
}
function clearHistory(){
  var historyBlock = document.querySelectorAll(".history__block")[document.querySelectorAll(".history__block").length-1];
  historyBlock.querySelectorAll('.history__form-input').forEach(e => {
    e.value = '';
  });
}

// =========== EDUCATION ==============
  document.querySelector(".education__block-add").addEventListener("click", function() {
    if (document.querySelectorAll(".education__wrapper").length == 1 && document.querySelector(".education__wrapper").style.display == "none"){
      document.querySelector(".education__wrapper").style.display = "flex";
    }
    else {
      var copy = document.querySelector(".education__wrapper").cloneNode(true);
      document.querySelector(".education__container").appendChild(copy);
      clearEducation();
      copy.querySelector('.education__btn-delete').addEventListener("click", function(){
        removeWrapperEducation(this);
      })
    }
  });
  document.querySelector('.education__btn-delete').addEventListener("click", function(){
    removeWrapperEducation(this);
});

function removeWrapperEducation(education){
  if (document.querySelectorAll(".education__wrapper").length > 1){
    education.parentElement.remove();
  }
  else {
    education.parentElement.style.display = "none";
  }
}
function clearEducation(){
  var educationBlock = document.querySelectorAll(".education__block")[document.querySelectorAll(".education__block").length-1];
  educationBlock.querySelectorAll('.education__form-input').forEach(e => {
    e.value = '';
  });
}

// ======== WEBSITE & SOCIALS ACCOUNTS ========
document.querySelector(".accounts__add").addEventListener("click", function() {
  if (document.querySelectorAll(".accounts__wrapper").length == 1 && document.querySelector(".accounts__wrapper").style.display == "none"){
    document.querySelector(".accounts__wrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".accounts__wrapper").cloneNode(true);
    document.querySelector(".accounts__container").appendChild(copy);
    clearAccounts();
    copy.querySelector('.accounts__btn-delete').addEventListener("click", function(){
      removeWrapperAccounts(this);
    })
  }
});
document.querySelector('.accounts__btn-delete').addEventListener("click", function(){
  removeWrapperAccounts(this);
});

function removeWrapperAccounts(accounts){
if (document.querySelectorAll(".accounts__wrapper").length > 1){
  accounts.parentElement.remove();
}
else {
  accounts.parentElement.style.display = "none";
}
}
function clearAccounts(){
var accountsBlock = document.querySelectorAll(".accounts__block")[document.querySelectorAll(".accounts__block").length-1];
accountsBlock.querySelectorAll('.accounts__form-input').forEach(e => {
  e.value = '';
});
}
// ======== LANGUAGES ========
document.querySelector(".languages__add").addEventListener("click", function() {
  if (document.querySelectorAll(".languages__wrapper").length == 1 && document.querySelector(".languages__wrapper").style.display == "none"){
    document.querySelector(".languages__wrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".languages__wrapper").cloneNode(true);
    document.querySelector(".languages__container").appendChild(copy);
    clearLanguages();
    copy.querySelector('.languages__btn-delete').addEventListener("click", function(){
      removeWrapperLanguages(this);
    })
  }
});
document.querySelector('.languages__btn-delete').addEventListener("click", function(){
  removeWrapperLanguages(this);
});

function removeWrapperLanguages(languages){
if (document.querySelectorAll(".languages__wrapper").length > 1){
  languages.parentElement.remove();
}
else {
  languages.parentElement.style.display = "none";
}
}
function clearLanguages(){
var languagesBlock = document.querySelectorAll(".languages__block")[document.querySelectorAll(".languages__block").length-1];
languagesBlock.querySelectorAll('.languages__form-input').forEach(e => {
  e.value = '';
});
}
// ======== COURCES ========

document.querySelector(".cources__add").addEventListener("click", function() {
  if (document.querySelectorAll(".cources__wrapper").length == 1 && document.querySelector(".cources__wrapper").style.display == "none"){
    document.querySelector(".cources__wrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".cources__wrapper").cloneNode(true);
    document.querySelector(".cources__container").appendChild(copy);
    clearCources();
    copy.querySelector('.cources__btn-delete').addEventListener("click", function(){
      removeWrapperCources(this);
    })
  }
});
document.querySelector('.cources__btn-delete').addEventListener("click", function(){
  removeWrapperCources(this);
});

function removeWrapperCources(cources){
if (document.querySelectorAll(".cources__wrapper").length > 1){
  cources.parentElement.remove();
}
else {
  cources.parentElement.style.display = "none";
}
}
function clearCources(){
var courcesBlock = document.querySelectorAll(".cources__block")[document.querySelectorAll(".cources__block").length-1];
courcesBlock.querySelectorAll('.cources__form-input').forEach(e => {
  e.value = '';
});
}
// ======== HOBBIES ========
$('.hobbies__textarea-tag').keyup(function() {
  $(".hobbies__form-atitle").html(this.value.replace(/\n/g, '<br/>'));
});


document.querySelector(".hobbies__add").addEventListener("click", function() {
  if (document.querySelectorAll(".hobbies__wrapper").length == 1 && document.querySelector(".hobbies__wrapper").style.display == "none"){
    document.querySelector(".hobbies__wrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".hobbies__wrapper").cloneNode(true);
    document.querySelector(".hobbies__container").appendChild(copy);
    clearHobbies();
    copy.querySelector('.hobbies__btn-delete').addEventListener("click", function(){
      removeWrapperHobbies(this);
    })
  }
});
document.querySelector('.hobbies__btn-delete').addEventListener("click", function(){
  removeWrapperHobbies(this);
});

function removeWrapperHobbies(hobbies){
if (document.querySelectorAll(".hobbies__wrapper").length > 1){
  hobbies.parentElement.remove();
}
else {
  hobbies.parentElement.style.display = "none";
}
}
function clearHobbies(){
var hobbiesBlock = document.querySelectorAll(".hobbies__block")[document.querySelectorAll(".hobbies__block").length-1];
hobbiesBlock.querySelectorAll('.hobbies__form-input').forEach(e => {
  e.value = '';
});
}
// =============================== SKILLACH ==============================
document.querySelector(".skillach__block-add").addEventListener("click", function() {
  if (document.querySelectorAll(".skillach__wrapper").length == 1 && document.querySelector(".skillach__wrapper").style.display == "none"){
    document.querySelector(".skillach__wrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".skillach__wrapper").cloneNode(true);
    document.querySelector(".skillach__container").appendChild(copy);
    clearSkillach();
    copy.querySelector('.skillach__btn-delete').addEventListener("click", function(){
      removeWrapperSkillach(this);
    })
  }
});
document.querySelector('.skillach__btn-delete').addEventListener("click", function(){
  removeWrapperSkillach(this);
});

function removeWrapperSkillach(skillach){
if (document.querySelectorAll(".skillach__wrapper").length > 1){
  skillach.parentElement.remove();
}
else {
  skillach.parentElement.style.display = "none";
}
}
function clearSkillach(){
var accountsBlock = document.querySelectorAll(".skillach__block")[document.querySelectorAll(".skillach__block").length-1];
accountsBlock.querySelectorAll('.skillach__form-input').forEach(e => {
  e.value = '';
});
}



// =============================== EDITOR-SHOW ============================
$('.resume__editor-btnbox').on('click', function (e) {
  e.preventDefault()
  $('.editor').addClass('editor--show')
  $('.resume').addClass('resume--hidden')
  $('.editor__header-back').addClass('editor__header-back--active')
})


$('.editor__header-back').on('click', function(e) {
  $('.editor').removeClass('editor--show')
  $('.resume').removeClass('resume--hidden')
  $('.editor__header-back').removeClass('editor__header-back--active')
})
// ============================ HEADING-SHOW =============================
$('.heading__right').on('click', function (e) {
  e.preventDefault()
  $('.heading__right').addClass('heading--show')
  $('.heading__right').removeClass('heading--pointer')
  $('.heading__left').addClass('heading--pointer')
  $('.heading__left').removeClass('heading--show')
  $('.resume__content-right').addClass('resume__content--show')
  $('.resume__content-left').removeClass('resume__content--show')
})
$('.heading__left').on('click', function (e) {
  e.preventDefault()
  $('.heading__left').addClass('heading--show')
  $('.heading__left').removeClass('heading--pointer')
  $('.heading__right').addClass('heading--pointer')
  $('.heading__right').removeClass('heading--show')
  $('.resume__content-left').addClass('resume__content--show')
  $('.resume__content-right').removeClass('resume__content--show')
})
// ================= INTRODUCTION / OBJECTIVES  ======================
$('.section__menu-intro').on('click', function (e) {
  e.preventDefault()
  if ($(this).hasClass('section__menu--active')) {
    $(this).removeClass('section__menu--active')
    $('.intro__container').addClass('container--show')
    $('.object__container').removeClass('container--show')
    $('.section__menu-object').addClass('section__menu--active')
  }
})
$('.section__menu-object').on('click', function (e) {
  e.preventDefault()
  if ($(this).hasClass('section__menu--active')) {
    $(this).removeClass('section__menu--active')
    $('.object__container').addClass('container--show')
    $('.intro__container').removeClass('container--show')
    $('.section__menu-intro').addClass('section__menu--active')
  }
})

// ========= SUMMARY-POPUP =========
$('.summary__optimized, .summary__popup-close').on('click', function (e) {
  e.preventDefault()
  $('.summary__popup').toggleClass('summary__popup--show')
})
// ========== SKILLACH-SLIDER ==========
$('.skillach__form-slider').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('skillach__form-slider--active')
  $('.skillach__form-row').slideToggle()
})

// ========== SKILLS__PRESETS-HEADING =========
// skills__presets-heading
$('.skills__preset-more').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('history__form-slider--active')
  $('.skills__preset-moresvg').toggleClass('skills__preset-moresvg--active')
  $('.skills__presets-bottom').slideToggle()
})

// ============== history__form-reswrapper ===================
$('.history__form-restextarea').keyup(function() {
  $(".history__form-rescoverhead").html(this.value.replace(/\n/g, '<br/>'));
});

$('.history__form-ressliding').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('history__form-ressliding--active')
  $('.history__form-rescovertext').slideToggle()
})

document.querySelector(".history__form-resadd").addEventListener("click", function() {
  if (document.querySelectorAll(".history__form-reswrapper").length == 1 && document.querySelector(".history__form-reswrapper").style.display == "none"){
    document.querySelector(".history__form-reswrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".history__form-reswrapper").cloneNode(true);
    document.querySelector(".history__form-rescontainer").appendChild(copy);
    clearReswrapper();
    copy.querySelector('.history__form-resbtndelete').addEventListener("click", function(){
      removeWrapperReswrapper(this);
    })
  }
});
document.querySelector('.history__form-resbtndelete').addEventListener("click", function(){
  removeWrapperReswrapper(this);
});

function removeWrapperReswrapper(reswrapper){
if (document.querySelectorAll(".history__form-reswrapper").length > 1){
  reswrapper.parentElement.remove();
}
else {
  reswrapper.parentElement.style.display = "none";
}
}
function clearReswrapper(){
var reswrapperBlock = document.querySelectorAll(".history__form-resblock")[document.querySelectorAll(".history__form-resblock").length-1];
reswrapperBlock.querySelectorAll('.history__form-restextarea').forEach(e => {
  e.value = '';
});
}
// ============== history__form-achievewrapper ===================
//achieve
$('.history__form-achievetextarea').keyup(function() {
  $(".history__form-achievecoverhead").html(this.value.replace(/\n/g, '<br/>'));
});

$('.history__form-achievesliding').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('history__form-achievesliding--active')
  $('.history__form-achievecovertext').slideToggle()
})

document.querySelector(".history__form-achieveadd").addEventListener("click", function() {
  if (document.querySelectorAll(".history__form-achievewrapper").length == 1 && document.querySelector(".history__form-achievewrapper").style.display == "none"){
    document.querySelector(".history__form-achievewrapper").style.display = "flex";
  }
  else {
    var copy = document.querySelector(".history__form-achievewrapper").cloneNode(true);
    document.querySelector(".history__form-achievecontainer").appendChild(copy);
    clearAchievewrapper();
    copy.querySelector('.history__form-achievebtndelete').addEventListener("click", function(){
      removeWrapperAchievewrapper(this);
    })
  }
});
document.querySelector('.history__form-achievebtndelete').addEventListener("click", function(){
  removeWrapperAchievewrapper(this);
});

function removeWrapperAchievewrapper(achievewrapper){
if (document.querySelectorAll(".history__form-achievewrapper").length > 1){
  achievewrapper.parentElement.remove();
}
else {
  achievewrapper.parentElement.style.display = "none";
}
}
function clearAchievewrapper(){
var achievewrapperBlock = document.querySelectorAll(".history__form-achieveblock")[document.querySelectorAll(".history__form-achieveblock").length-1];
achievewrapperBlock.querySelectorAll('.history__form-achievetextarea').forEach(e => {
  e.value = '';
});
}
// ============== other__section ===================
// $(add_custom_section).on('click', function (e) {
//   e.preventDefault()
//   $(svg_custom_section).toggleClass('other__section-svg--unshow')
//   $(svg_custom_section_minus).toggleClass('other__section-svg--show')
// })
$(add_languages_section).on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('other__section-item--shadow')
  $(svg_languages_section).toggleClass('other__section-svg--unshow')
  $(svg_languages_section_minus).toggleClass('other__section-svg--show')
  $('.languages').toggleClass('languages--show')
})
$(add_cources_section).on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('other__section-item--shadow')
  $(svg_cources_section).toggleClass('other__section-svg--unshow')
  $(svg_cources_section_minus).toggleClass('other__section-svg--show')
  $('.cources').toggleClass('cources--show')
})
$(add_internships_section).on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('other__section-item--shadow')
  $(svg_internships_section).toggleClass('other__section-svg--unshow')
  $(svg_internships_section_minus).toggleClass('other__section-svg--show')
})
$(add_hobbies_section).on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('other__section-item--shadow')
  $(svg_hobbies_section).toggleClass('other__section-svg--unshow')
  $(svg_hobbies_section_minus).toggleClass('other__section-svg--show')
  $('.hobbies').toggleClass('hobbies--show')
})








});