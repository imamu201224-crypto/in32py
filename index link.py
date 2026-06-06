# Make a webbrowser in python

import webbrowser

browser = webbrowser.get("chrome")

while True:
    url = input("Enter the url")
    browser.open_new_tab(url)
    