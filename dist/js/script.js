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
        $('body').addClass('_lock');
    });
    $('.nav__arrow-btn').on('click', function () {
        $('.nav').slideUp('300');
        $('body').removeClass('_lock');
    });
    if (window.innerWidth < 992) {
        $('.nav__list-item').on('click', function () {
            $(this).parent().parent().parent().parent().slideUp('300');
            $('body').removeClass('_lock');
        });
    }
    $('.tooltip__btn').hover(function () {
        $(this).parent().find('div.tooltip__info').toggleClass('tooltip__info--active');
    });
    $('.tooltip__close-btn').on('click', function () {
        $(this).parent().removeClass('tooltip__info--active');
    });

    $("a[href^='#']").click(function () {
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top + "px" });
        return false;
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
        $('#target-retail-value').text($(this).val() + '$');
    });
    $('#basic_name').on('change', function () {
        $('#contact_name').val($(this).val());
    });
    $('#basic_email').on('change', function () {
        $('#contact_email').val($(this).val());
    });
    $('input[name="basic_name"]').on('change', function () {
        console.log($(this).val());
        $('#name-value').text($(this).val());
    });
    $('input[name="basic_email"]').on('change', function () {
        console.log($(this).val());
        $('#email-value').text($(this).val());
    });
    $('input[type="tel"]').on('change', function () {
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
        let checkedInputs = [];
        for (let i = 0; i < checkboxInputs.length; i++) {
            let otherInput = checkboxInputs[i].parentNode.nextElementSibling;
            if (checkboxInputs[i].checked) {
                if (checkboxInputs[i].value === 'Other (type your answer)') {
                    checkboxInputs[i].value = otherInput.value;
                    checkedInputs.push(checkboxInputs[i].value);
                    otherInput.addEventListener('change', () => {
                        checkboxInputs[i].value = otherInput.value;
                        checkedInputs.push(checkboxInputs[i].value);
                    });
                } else {
                    checkedInputs.push(checkboxInputs[i].value);
                    console.log(checkedInputs);
                }
            }
            checkboxInputs[i].addEventListener('change', () => {
                let checkIndex = checkedInputs.indexOf(checkboxInputs[i]);
                if (checkboxInputs[i].checked) {
                    if (checkboxInputs[i].value === 'Other (type your answer)') {
                        checkboxInputs[i].value = otherInput.value
                        checkedInputs.push(checkboxInputs[i].value);
                        otherInput.addEventListener('change', () => {
                            checkboxInputs[i].value = otherInput.value
                            checkedInputs.push(checkboxInputs[i].value);
                        });
                    } else {
                        checkedInputs.push(checkboxInputs[i].value);
                        console.log(checkedInputs);
                    }
                } else {
                    checkedInputs.splice(checkIndex, 1);
                    console.log(checkedInputs);
                }
            });
        }
        for (let i = 0; i < checkedInputs.length; i++) {
            let resultCheckedItem = document.createElement('div');
            resultCheckedItem.classList.add('result-value');
            resultCheckedItem.innerHTML = checkedInputs[i];
            value.appendChild(resultCheckedItem);
        }
    }
    /* function outputChoosenInputs() {
        
    } */
    function getAllChecks() {
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
        getCheckboxValues(surfaceFinishing, surfaceFinishingValue);
        getCheckboxValues(productUsage, productUsageValue);
        getCheckboxValues(unitAffect, unitAffectValue);
        getCheckboxValues(needApp, needAppValue);
        getCheckboxValues(appDeveloper, appDeveloperValue);
        getCheckboxValues(processRole, processRoleValue);
    }


    $('input[value="Wireless"]').on('change', function () {
        if ($(this).is(':checked')) {
            $('.step-item__subchecks').slideDown('300');
        } else {
            $('.step-item__subchecks').slideUp('300');
        }
    });

    $('.drop-input input[type="checkbox"]').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parent().next().slideDown('300');
        } else {
            $(this).parent().next().slideUp('300');
        }
    });


    // Логика шагов и прогресс
    let currentStep = 0;
    const stepImg = document.querySelector('#step-img');
    const stepImgSrc = ['img/watches/1.svg', 'img/watches/2.svg', 'img/watches/3.svg', 'img/watches/4.svg', 'img/watches/5.svg', 'img/watches/06.png', 'img/watches/07.png', 'img/watches/08.png'];

    const stepPercents = [12.5, 25, 27.5, 50, 62.5, 75, 87.5, 100];
    const statusPercent = document.querySelector('.nav__status-percent');
    const statusMobPercent = document.querySelector('.top-nav__progress-percent');

    const stepTitle = document.querySelector('.top-nav__title');
    const navMenuItems = document.querySelectorAll('.nav__list-item');
    const statusText = document.querySelector('.nav__status');
    let stepItems = document.querySelectorAll('.step__content');
    // Buttons
    let backBtn = document.querySelector('.back-btn');
    let nextBtn = document.querySelector('.next-btn');
    const editButtons = document.querySelectorAll('.edit-btn');

    backBtn.onclick = () => prevStep(1);
    nextBtn.onclick = () => nextStep(1);
    showStep(currentStep);

    function showStep(n) {
        if (n <= 7) {
            stepItems[n].style.display = "block";
        }
        if (n == 0) {
            backBtn.style.display = "none";
        } else {
            backBtn.style.display = "flex";
        }
        if (n == 8) {
            $('main').remove();
            $('.thanks').fadeIn('300');
        }
        backBtn.addEventListener('click', function () {
            $('.result-color').remove();
            $('.result-value').remove();
        });
        nextBtn.addEventListener('click', () => {
            if (n == 6) {
                outputChoosenColors();
                getAllChecks();
            } else {
                $('.result-color').remove();
                $('.result-value').remove();
            }
            /* if (nextBtn.classList.contains('next-btn--sum-up') && validateForm()) {
                outputChoosenColors();
                getAllChecks();
            } */
        });
    }

    /* function outputResult(n) {
        
    } */

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
        let last = navMenuItems.length - 1;
        console.log(last);
        if (n === last) {
            navMenuItems[last].classList.remove('nav__list-item--done');
            navMenuItems[last].classList.add('nav__list-item--current');
            statusText.classList.remove('nav__status--completed');
        } else if (n == 0) {
            navMenuItems[n].classList.remove('nav__list-item--done');
            navMenuItems[n + 1].classList.remove('nav__list-item--current');
            navMenuItems[n].classList.add('nav__list-item--current');
        } else {
            navMenuItems[n].classList.remove('nav__list-item--done');
            navMenuItems[n].classList.add('nav__list-item--current');
            navMenuItems[n + 1].classList.remove('nav__list-item--current');
            statusText.classList.remove('nav__status--completed');
        }
    }
    showActiveMenuItemPrev(currentStep);

    function showPercent(n) {
        statusPercent.textContent = `${stepPercents[n]}%`;
        statusMobPercent.textContent = `${stepPercents[n]}%`;
    }
    showPercent(currentStep);

    function fillStepTitle(n) {
        if (n == 7) {
            stepTitle.textContent = navMenuItems[n - 1].textContent;
        } else {
            stepTitle.textContent = navMenuItems[n].textContent;
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
                $('.step__content').hide();
                currentStep = i;
                showStep(i);
                showStepImg(currentStep);
                fillStepTitle(currentStep);
                showPercent(currentStep);
                $('.nav__list-item').removeClass('nav__list-item--done');
                $('.nav__list-item').removeClass('nav__list-item--current');
                statusText.classList.remove('nav__status--completed');
                navMenuItems[i].classList.add('nav__list-item--current');
                for (let i = 0; i < currentStep; i++) {
                    navMenuItems[i].classList.add('nav__list-item--done');
                }
            });
        }
    }
    editStep();
    
    function navigateSteps() {
        for (let i = 0; i < navMenuItems.length; i++) {
            navMenuItems[i].addEventListener('click', function () {
                if (validateForm()) {
                    $('.step__content').hide();
                    navItemIndex = navMenuItems[i].dataset.nav;
                    currentStep = navItemIndex;
                    showStep(i);
                    showStepImg(currentStep);
                    fillStepTitle(currentStep);
                    showPercent(currentStep);
                    $('.nav__list-item').removeClass('nav__list-item--done');
                    $('.nav__list-item').removeClass('nav__list-item--current');
                    statusText.classList.remove('nav__status--completed');
                    navMenuItems[i].classList.add('nav__list-item--current');
                    for (let i = 0; i < currentStep; i++) {
                        navMenuItems[i].classList.add('nav__list-item--done');
                    }
                }
            });
        }
    }
    navigateSteps();


    let resultColors = document.querySelector('#preferred-colors-value');
    let choosenColors = [];
    function chooseColor() {
        let colorInputs = document.querySelector('.colors').querySelectorAll('input[name="color"]');
        console.log(colorInputs);
        console.log(colorInputs.length);
        for (let i = 0; i < colorInputs.length; i++) {
            colorInputs[i].addEventListener('change', () => {
                let colorIndex = choosenColors.indexOf(colorInputs[i]);
                if (colorInputs[i].checked) {
                    choosenColors.push(colorInputs[i].nextElementSibling.style.backgroundColor);
                    console.log(choosenColors);
                }
                if (!colorInputs[i].checked) {
                    choosenColors.splice(colorIndex, 1);
                    console.log(choosenColors);
                }
            });
        }
    }
    chooseColor();

    function clearChoosen() {
        for (let i = 0; i < navMenuItems.length; i++) {
            navMenuItems[i].addEventListener('click', () => {
                $('.result-color').remove();
                $('.result-value').remove();
            });
        }
        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].addEventListener('click', () => {
                $('.result-color').remove();
                $('.result-value').remove();
            });
        }
    }
    clearChoosen();

    function outputChoosenColors() {
        for (let i = 0; i < choosenColors.length; i++) {
            let resultColorItem = document.createElement('div');
            choosenColorBg = choosenColors[i];
            console.log(choosenColorBg);
            if (choosenColorBg === 'rgb(0, 0, 0)') {
                let border = ['0.1rem', 'solid', '#fff'];
                resultColorItem.style.borderWidth = border[0];
                resultColorItem.style.borderStyle = border[1];
                resultColorItem.style.borderColor = border[2];
            }
            resultColorItem.classList.add('result-color');
            resultColorItem.style.backgroundColor = choosenColorBg;
            console.log(resultColorItem);
            resultColors.appendChild(resultColorItem);
            console.log(resultColors);
        }
    }

    /* nextBtn.addEventListener('click', () => {
        if (nextBtn.classList.contains('next-btn--sum-up') && validateForm()) {
            outputChoosenColors();
            getAllChecks();
        }
    }); */

    function nextStep(n) {
        if (n == 1 && !validateForm()) return false;
        if (n <= 7) {
            stepItems[currentStep].style.display = "none";
            currentStep = +currentStep + n;
        }
        showStep(currentStep);
        showStepImg(currentStep)
        showActiveMenuItemNext(currentStep);
        showPercent(currentStep);
        fillStepTitle(currentStep);
        //outputResult(currentStep);
    }

    function prevStep(n) {
        stepItems[currentStep].style.display = "none";
        currentStep = currentStep - n;
        showStep(currentStep);
        showStepImg(currentStep)
        showActiveMenuItemPrev(currentStep);
        showPercent(currentStep);
        fillStepTitle(currentStep);
        $('.result-color').remove();
        $('.result-value').remove();
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



