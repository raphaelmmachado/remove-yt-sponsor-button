function removeSponsorButton() {
  const checkButtonInterval = setInterval(() => {
    const sponsorButton = document.getElementById("sponsor-button");
    if (sponsorButton && sponsorButton.parentNode) {
      sponsorButton.remove();
      console.log("YouTube sponsor button removed");
      clearInterval(checkButtonInterval);
      return;
    } else {
      console.log("Button not found! Retrying...");
    }
  }, 1000);
}

removeSponsorButton();
