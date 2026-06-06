import WEB as py

py.title("mini WEB App")

name = py.text_input\
   ("Enter your name:")

if py.button("Submit"):
    py.success(f"welcome,\
        {name}!")