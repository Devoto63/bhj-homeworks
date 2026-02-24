document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');

    function positionTooltip(tooltip, element) {
        const elementRect = element.getBoundingClientRect();
        tooltip.style.left = elementRect.left + 'px';
        tooltip.style.top = (elementRect.bottom + 5) + 'px'; 
    }

    function getTooltip(text) {
        let tooltip = document.querySelector('.tooltip');
        
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = text;
        return tooltip;
    }

    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.remove('tooltip_active');
        }
    }

    tooltips.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tooltip = getTooltip(this.getAttribute('title'));
            const isActive = tooltip.classList.contains('tooltip_active');
            
            if (isActive && tooltip.dataset.for === this.href + this.textContent) {
                hideTooltip();
                tooltip.dataset.for = '';
                return;
            }
        
            hideTooltip();

            tooltip.classList.add('tooltip_active');
            tooltip.dataset.for = this.href + this.textContent; 
            positionTooltip(tooltip, this);
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('has-tooltip')) {
            hideTooltip();
        }
    });

    window.addEventListener('scroll', function() {
        const tooltip = document.querySelector('.tooltip_active');
        const targetElement = tooltip ? Array.from(tooltips).find(el => 
            (el.href + el.textContent) === tooltip.dataset.for
        ) : null;
        
        if (tooltip && targetElement) {
            positionTooltip(tooltip, targetElement);
        }
    });
    
    window.addEventListener('resize', function() {
        const tooltip = document.querySelector('.tooltip_active');
        const targetElement = tooltip ? Array.from(tooltips).find(el => 
            (el.href + el.textContent) === tooltip.dataset.for
        ) : null;
        
        if (tooltip && targetElement) {
            positionTooltip(tooltip, targetElement);
        }
    });
});