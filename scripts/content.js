function removeSponsorButton() {
  const checkButtonInterval = setInterval(() => {
    const sponsorButton = document.getElementById("sponsor-button");
    if (sponsorButton && sponsorButton.parentNode) {
      sponsorButton.remove();
      console.log("YouTube sponsor button removed");
      clearInterval(checkButtonInterval);
      return;
    }
  }, 1000);
}

removeSponsorButton();
