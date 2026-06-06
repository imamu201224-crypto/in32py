import streamlit as st
from turtle import st

import qrcode
st.set_page_config("QR GEN",page_icon="QR GEN.png")
st.title("QR CODE GENERATOR")

qr_data = st.text_input("Enter the link to generate QR code:")
    if qr_data:
       img = qrcode.make(qr_data)
       img.save("random.png")
       st.image("image="random.png")
                
        else:
        st.warning("please enter data to generate QR code")

st.write("All copy rights reserved® 2023 Hydra os")