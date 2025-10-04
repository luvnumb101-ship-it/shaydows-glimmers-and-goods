// Remove Wix branding elements
document.addEventListener('DOMContentLoaded', function() {
    // Update the title
    document.title = 'Shaydow';
    
    // Remove Wix ads and branding elements
    const removeElements = [
        '.wix-ads-2',
        '[data-hook="wix-ads"]',
        '.wix-banners',
        '#WIX_ADS',
        '.upgrade-banner-container',
        '[data-hook="upgrade-button"]',
        '.upgrade-button',
        '.premium-link'
    ];
    
    removeElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.style.display = 'none');
    });
    
    // Remove any top margins that might be added for ads
    document.body.style.marginTop = '0';
    document.body.style.paddingTop = '0';
});