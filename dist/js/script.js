$(function () {
    $('.burger-btn').on('click', function () {
        $('.header__menu').slideToggle('300');
        $('body').toggleClass('_lock');
    });

    $('.header__menu-link').on('click', function () {
        $('.burger-menu').removeClass('header__menu--active');
    });

    $('.filter-style').styler();

    $('.top-nav__title').on('click', function () {
        $('.nav').slideDown('300');
    });
    $('.nav__arrow-btn').on('click', function () {
        $('.nav').slideUp('300');
    });
    /* const tooltipCloseBtn = document.querySelectorAll('.tooltip__close-btn');
    for (let i = 0; i < tooltipCloseBtn.length; i++) {
        tooltipCloseBtn[i].addEventListener('click', function () {
            this.parentNode.style.cssText = 'opacity: 0; visibility: hidden';
        });
    } */
    $('.tooltip__btn').hover(function () {
        $(this).parent().find('div.tooltip__info').toggleClass('tooltip__info--active');
    });
    $('.tooltip__close-btn').on('click', function () {
        $(this).parent().removeClass('tooltip__info--active');
    });


    $('#project_descr').on('change', function () {
        console.log($(this).val());
        $('#project-descr-value').text($(this).val());
    });
    $('#prototype_features').on('change', function () {
        console.log($(this).val());
        $('#prototype-features-value').text($(this).val());
    });
    $('input[name="prototypes_num"]').on('change', function () {
        console.log($(this).val());
        $('#prototypes-value').text($(this).val());
    });
    $('input[name="target_retail"]').on('change', function () {
        console.log($(this).val());
        $('#target-retail-value').text($(this).val()+'$');
    });
    $('input[name="name"]').on('change', function () {
        console.log($(this).val());
        $('#name-value').text($(this).val());
    });
    $('input[name="email"]').on('change', function () {
        console.log($(this).val());
        $('#email-value').text($(this).val());
    });
    $('input[name="phone"]').on('change', function () {
        console.log($(this).val());
        $('#phone-value').text($(this).val());
    });


    // Radio fields
    let prototypeTimeframe = document.querySelector('.prototype-timeframe');
    let prototypeTimeframeValue = document.querySelector('#prototype-timeframe-value');
    let productionTimeframe = document.querySelector('.production-timeframe');
    let productionTimeframeValue = document.querySelector('#production-timeframe-value');

    function getRadioValues(parent, value) {
        let radioInputs = parent.querySelectorAll('input[type="radio"]');
        for (let i = 0; i < radioInputs.length; i++) {
            if (radioInputs[i].checked) {
                value.textContent = radioInputs[i].value;
            }
            radioInputs[i].addEventListener('change', () => {
                if (radioInputs[i].checked) {
                    value.textContent = radioInputs[i].value;
                }
            });
        }
    }
    getRadioValues(prototypeTimeframe, prototypeTimeframeValue);
    getRadioValues(productionTimeframe, productionTimeframeValue);
    

    // Checkboxes
    let help = document.querySelector('.help');
    let helpValue = document.querySelector('#help-value');
    let productCategory = document.querySelector('.product-category');
    let productCategoryValue = document.querySelector('#product-category-value');
    let productType = document.querySelector('.product-type');
    let productTypeValue = document.querySelector('#product-type-value');
    let targetMarket = document.querySelector('.target-market');
    let targetMarketValue = document.querySelector('#target-market-value');
    let powerSource = document.querySelector('.power-source');
    let powerSourceValue = document.querySelector('#power-source-value');
    let usersInteraction = document.querySelector('.users-interaction');
    let usersInteractionValue = document.querySelector('#users-interaction-value');
    let interfaces = document.querySelector('.interfaces');
    let interfacesValue = document.querySelector('#interfaces-value');
    let sensors = document.querySelector('.sensors');
    let sensorsValue = document.querySelector('#sensors-value');
    let visualIndication = document.querySelector('.visual-indication');
    let visualIndicationValue = document.querySelector('#visual-indication-value');
    let updateSoft = document.querySelector('.update-soft');
    let updateSoftValue = document.querySelector('#update-soft-value');
    let materialEnclosure = document.querySelector('.material-enclosure');
    let materialEnclosureValue = document.querySelector('#material-enclosure-value');
    let colorSolution = document.querySelector('.color-solution');
    let colorSolutionValue = document.querySelector('#color-solution-value');
    let preferredColors = document.querySelector('.preferred-colors');
    let preferredColorsValue = document.querySelector('#preferred-colors-value');
    let surfaceFinishing = document.querySelector('.surface-finishing');
    let surfaceFinishingValue = document.querySelector('#surface-finishing-value');
    let productUsage = document.querySelector('.product-usage');
    let productUsageValue = document.querySelector('#product-usage-value');
    let unitAffect = document.querySelector('.unit-affect');
    let unitAffectValue = document.querySelector('#unit-affect-value');
    let needApp = document.querySelector('.need-app');
    let needAppValue = document.querySelector('#need-app-value');
    let appDeveloper = document.querySelector('.app-developer');
    let appDeveloperValue = document.querySelector('#app-developer-value');
    let processRole = document.querySelector('.process-role');
    let processRoleValue = document.querySelector('#process-role-value');


    function getCheckboxValues(parent, value) {
        let checkboxInputs = parent.querySelectorAll('input[type="checkbox"]');
        //let checked = [];
        for (let i = 0; i < checkboxInputs.length; i++) {
            /* if (checkboxInputs[i].value == 'Other (type your answer)') {
                console.log(checkboxInputs[i].value);
                checked.pop(checkboxInputs[i].value);
                console.log(checked);
                let otherInput = checkboxInputs[i].parentNode.nextElementSibling;
                otherInput.addEventListener('input', function () {
                    console.log(otherInput.value);
                    checked.push(otherInput.value);
                    value.innerHTML = otherInput.value;
                    console.log(value);
                });
            } */
            if (checkboxInputs[i].checked) {
                value.innerHTML = checkboxInputs[i].value;
                console.log(value);
            }
            checkboxInputs[i].addEventListener('change', () => {
                if (checkboxInputs[i].checked) {
                    value.innerHTML += '<br>' + checkboxInputs[i].value;
                    console.log(value);
                    if (checkboxInputs[i].value == 'Other (type your answer)') {
                        let otherInput = checkboxInputs[i].parentNode.nextElementSibling;
                        otherInput.addEventListener('change', function () {
                            console.log(otherInput.value);
                            value.innerHTML += `: ${otherInput.value}`;
                            console.log(value);
                        });
                    }
                }
            });
        }
    }
    getCheckboxValues(help, helpValue);
    getCheckboxValues(productCategory, productCategoryValue);
    getCheckboxValues(productType, productTypeValue);
    getCheckboxValues(targetMarket, targetMarketValue);
    getCheckboxValues(powerSource, powerSourceValue);
    getCheckboxValues(usersInteraction, usersInteractionValue);
    getCheckboxValues(interfaces, interfacesValue);
    getCheckboxValues(sensors, sensorsValue);
    getCheckboxValues(visualIndication, visualIndicationValue);
    getCheckboxValues(updateSoft, updateSoftValue);
    getCheckboxValues(materialEnclosure, materialEnclosureValue);
    getCheckboxValues(colorSolution, colorSolutionValue);
    getCheckboxValues(preferredColors, preferredColorsValue);
    getCheckboxValues(surfaceFinishing, surfaceFinishingValue);
    getCheckboxValues(productUsage, productUsageValue);
    getCheckboxValues(unitAffect, unitAffectValue);
    getCheckboxValues(needApp, needAppValue);
    getCheckboxValues(appDeveloper, appDeveloperValue);
    getCheckboxValues(processRole, processRoleValue);


    // Логика шагов и прогресс
    let currentStep = 0;
    const stepImg = document.querySelector('#step-img');
    const stepImgSrc = ['img/watches/1.svg', 'img/watches/2.svg', 'img/watches/3.svg', 'img/watches/4.svg', 'img/watches/5.svg', 'img/watches/6.png', 'img/watches/7.png', 'img/watches/8.png'];
    const stepPercents = [12.5, 25, 27.5, 50, 62.5, 75, 87.5, 100];
    const statusPercent = document.querySelector('.percent');
    const statusMobPercent = document.querySelector('.top-nav__progress-percent');
    const stepTitle = document.querySelector('.top-nav__title');
    console.log(stepTitle);
    const navMenuItems = document.querySelectorAll('.nav__list-item');
    console.log(navMenuItems);
    const statusText = document.querySelector('.nav__status');
    console.log(statusText);
    let stepItems = document.querySelectorAll('.step__content');
    let backBtn = document.querySelector('.back-btn');
    let nextBtn = document.querySelector('.next-btn');
    const editButtons = document.querySelectorAll('.edit-btn');
    console.log(editButtons);
    backBtn.onclick = () => prevStep(1);
    nextBtn.onclick = () => nextStep(1);
    showStep(currentStep);

    function showStep(n) {
        stepItems[n].style.display = "block";
        if (n == 0) {
            backBtn.style.display = "none";
        } else {
            backBtn.style.display = "block";
        }
    }

    function showActiveMenuItemNext(n) {
        if (n == 0) {
            navMenuItems[n].classList.add('nav__list-item--current');
        } else if (n == 7) {
            navMenuItems[n - 1].classList.add('nav__list-item--done');
            statusText.classList.add('nav__status--completed');
        } else {
            navMenuItems[n - 1].classList.remove('nav__list-item--current');
            navMenuItems[n - 1].classList.add('nav__list-item--done');
            navMenuItems[n].classList.add('nav__list-item--current');
        }
    }
    showActiveMenuItemNext(currentStep);

    function showActiveMenuItemPrev(n) {
        if (n == 0) {
            navMenuItems[n].classList.remove('nav__list-item--done');
            navMenuItems[n + 1].classList.remove('nav__list-item--current');
            navMenuItems[n].classList.add('nav__list-item--current');
        } else if (n == 7) {
            navMenuItems[n - 1].classList.remove('nav__list-item--done');
            navMenuItems[n - 1].classList.add('nav__list-item--current');
            //statusText.classList.remove('nav__status--completed');
        } else {
            navMenuItems[n + 1].classList.remove('nav__list-item--current');
            navMenuItems[n].classList.remove('nav__list-item--done');
            navMenuItems[n].classList.add('nav__list-item--current');
            statusText.classList.remove('nav__status--completed');
        }
        /* if (n !== 7) {
            navMenuItems[n + 1].classList.remove('nav__list-item--current');
        } */
    }
    showActiveMenuItemPrev(currentStep);

    function showPercent(n) {
        statusPercent.textContent = `${stepPercents[n]}%`;
        statusMobPercent.textContent = `${stepPercents[n]}%`;
    }
    showPercent(currentStep);

    function fillStepTitle(n) {
        stepTitle.textContent = navMenuItems[n].textContent;
        if (n == 7) {
            stepTitle.textContent = navMenuItems[n - 1].textContent;
        }
    }
    fillStepTitle(currentStep);

    function showStepImg(n) {
        stepImg.src = stepImgSrc[n];
    }
    showStepImg(currentStep);

    function editStep() {
        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].addEventListener('click', function () {
                stepItems[editButtons.length].style.display = 'none';
                showStep(i);
            });
        }
    }
    editStep();

    function navigateSteps() {
        for (let i = 0; i < navMenuItems.length; i++) {
            navMenuItems[i].addEventListener('click', function () {
                //stepItems[navMenuItems.length].style.display = 'none';
                showStep(i);
            });
        }
    }
    navigateSteps();

    function nextStep(n) {
        if (n == 1 && !validateForm()) return false;
        stepItems[currentStep].style.display = "none";
        currentStep = currentStep + n;
        console.log(currentStep);
        showStep(currentStep);
        showStepImg(currentStep)
        showActiveMenuItemNext(currentStep);
        showPercent(currentStep);
        fillStepTitle(currentStep);
    }

    function prevStep(n) {
        stepItems[currentStep].style.display = "none";
        currentStep = currentStep - n;
        showStep(currentStep);
        showStepImg(currentStep)
        showActiveMenuItemPrev(currentStep);
        showPercent(currentStep);
        fillStepTitle(currentStep);
    }

    function validateForm() {
        let requiredInputs;
        let valid = true;
        requiredInputs = stepItems[currentStep].querySelectorAll(".input--required");
        for (let i = 0; i < requiredInputs.length; i++) {
            if (requiredInputs[i].value == '') {
                requiredInputs[i].className += " invalid";
                valid = false;
            }
        }
        return valid;
    }
});



