const dummyData = [
  { 
    "id":"1",
    "name": "Sunrise Hotel",
    "location": "Wachau, Germany",
    "rating": 4,
    "builtYear": 1650,
    "availability": "1-6 April",
    "chargePerNight": 19286,
    "type": "castle",
    "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  },
  {
    
    "id":"2",
    "name": "Mountain View Resort",
    "location": "Swiss Alps, Switzerland",
    "rating": 5,
    "builtYear": 1725,
    "availability": "3-10 May",
    "chargePerNight": 23500,
    "type": "skiing",
     "imageUrl": "https://imgs.search.brave.com/Pg30bH_hv7Ra16-V02risORaIYEg9T95yxNx66H9njU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c25vLmNvLnVrL2lt/Zy9za2ktaG90ZWxz/L2hvbWUvRnJhbmNl/LUhvdGVscy1DbGVm/LWRlcy1jaGFtcHMu/anBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"3",
    "name": "Oceanfront Paradise",
    "location": "Maui, Hawaii",
    "rating": 4,
    "builtYear": 1688,
    "availability": "15-20 June",
    "chargePerNight": 18000,
    "type": "beachfront",
     "imageUrl": "https://imgs.search.brave.com/6NXTYyRayH7lD9Gz3mXy38cMFYW7cPJG67mvOTRPVnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bGRlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/U2hvcmUtSG91c2Ut/SGVyby1PY2VhbmZy/b250LVBvb2wtMjAw/MHgxMjAwLTEuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"4",
    "name": "City Lights Inn",
    "location": "New York City, USA",
    "rating": 4,
    "builtYear": 1776,
    "availability": "8-14 July",
    "chargePerNight": 22000,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"5",
    "name": "Serenity Suites",
    "location": "Santorini, Greece",
    "rating": 5,
    "builtYear": 1600,
    "availability": "21-28 August",
    "chargePerNight": 27500,
    "type": "riads",
     "imageUrl": "https://imgs.search.brave.com/z254v4_ECoddWjfHrwFbWb6LE7XF1v0ZIDFZAzzewkg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8yODAwMDAwMC8y/NzE0MDAwMC8yNzEz/MTQwMC8yNzEzMTM0/MC8zZjk4NGNkZl95/LmpwZw",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"6",
    "name": "Evergreen Lodge",
    "location": "Banff National Park, Canada",
    "rating": 4,
    "builtYear": 1695,
    "availability": "2-9 September",
    "chargePerNight": 20000,
    "type": "nationalparks",
     "imageUrl": "https://imgs.search.brave.com/QoxeNXHW99tb_oEHi3mJJgwC0NAmkCmBaY2Zg4onUFc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvc3F1YXJl/MjAwLzIwMTg3NDU0/Ni5qcGc_az1hMTM4/MDhhYjIxYzc1NDNj/MWYzNzcwYTdkNTMy/OTk4ZDBmZTBkMmJi/ZDQwZTcyYjYxMWQ0/ODhhOWFiOTRiMzYz/Jm89",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"7",
    "name": "Tranquil Retreat",
    "location": "Kyoto, Japan",
    "rating": 5,
    "builtYear": 1623,
    "availability": "12-18 October",
    "chargePerNight": 25000,
    "type": "earthhomes",
     "imageUrl": "https://imgs.search.brave.com/_2npdCBw4Ab5TFZgBnv89A_jGbGULSScZeJTHKLvG0E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9tZWRpdC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDgvU3dpdHplcmxh/bmQtdW5kZXJncm91/bmQtZWFydGgtaG91/c2UtbGFrZS5qcGc",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"8",
    "name": "Royal Palace Hotel",
    "location": "Paris, France",
    "rating": 4,
    "builtYear": 1660,
    "availability": "5-12 November",
    "chargePerNight": 21000,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"9",
    "name": "Alpine Chalet",
    "location": "Zermatt, Switzerland",
    "rating": 5,
    "builtYear": 1702,
    "availability": "17-24 December",
    "chargePerNight": 24000,
    "type": "skiing",
     "imageUrl": "https://imgs.search.brave.com/Pg30bH_hv7Ra16-V02risORaIYEg9T95yxNx66H9njU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c25vLmNvLnVrL2lt/Zy9za2ktaG90ZWxz/L2hvbWUvRnJhbmNl/LUhvdGVscy1DbGVm/LWRlcy1jaGFtcHMu/anBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"10",
    "name": "Tropical Oasis Resort",
    "location": "Bora Bora, French Polynesia",
    "rating": 4,
    "builtYear": 1675,
    "availability": "3-9 January",
    "chargePerNight": 19500,
    "type": "beachfront",
     "imageUrl": "https://imgs.search.brave.com/6NXTYyRayH7lD9Gz3mXy38cMFYW7cPJG67mvOTRPVnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bGRlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/U2hvcmUtSG91c2Ut/SGVyby1PY2VhbmZy/b250LVBvb2wtMjAw/MHgxMjAwLTEuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"11",
    "name": "Golden Sands Resort",
    "location": "Dubai, UAE",
    "rating": 5,
    "builtYear": 1750,
    "availability": "14-20 February",
    "chargePerNight": 28000,
    "type": "desert",
     "imageUrl": "https://imgs.search.brave.com/anUR6EOpprDln582MVu8Gz6pHN79yLGeUb5RyzzWkR0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlbHV4/dXJ5dHJhdmVsZXhw/ZXJ0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMS9k/YW1hcmFsYW5kLWNh/bXAtbmFtaWJpYS1y/ZXZpZXcuanBnP3Jl/c2l6ZT0zMjYsMjQ1/JnNzbD0x",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"12",
    "name": "Majestic Manor",
    "location": "Edinburgh, Scotland",
    "rating": 4,
    "builtYear": 1632,
    "availability": "6-13 March",
    "chargePerNight": 21500,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"13",
    "name": "Countryside Retreat",
    "location": "Tuscany, Italy",
    "rating": 5,
    "builtYear": 1668,
    "availability": "18-25 April",
    "chargePerNight": 25500,
    "type": "farms",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"14",
    "name": "Sunset Haven",
    "location": "Maldives",
    "rating": 4,
    "builtYear": 1698,
    "availability": "9-15 May",
    "chargePerNight": 19000,
    "type": "beachfront",
     "imageUrl": "https://imgs.search.brave.com/6NXTYyRayH7lD9Gz3mXy38cMFYW7cPJG67mvOTRPVnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bGRlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/U2hvcmUtSG91c2Ut/SGVyby1PY2VhbmZy/b250LVBvb2wtMjAw/MHgxMjAwLTEuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"15",
    "name": "Urban Escape Hotel",
    "location": "Sydney, Australia",
    "rating": 5,
    "builtYear": 1743,
    "availability": "21-28 June",
    "chargePerNight": 23000,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"16",
    "name": "Historic Plaza Inn",
    "location": "Santa Fe, USA",
    "rating": 4,
    "builtYear": 1685,
    "availability": "10-16 July",
    "chargePerNight": 20500,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"17",
    "name": "Lakeside Lodge",
    "location": "Lake Como, Italy",
    "rating": 5,
    "builtYear": 1610,
    "availability": "22-29 August",
    "chargePerNight": 26500,
    "type": "lake",
     "imageUrl": "https://imgs.search.brave.com/T4OrFYJeh7MCQHB8ohdzYDU5NTbWK6ra8xNBYIHPnMU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJy/b3JsYWtlaW5uLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNS9NaXJyb3It/TGFrZS1Jbm4tcHJp/dmF0ZS1iZWFjaC53/ZWJw",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"18",
    "name": "Palm Grove Resort",
    "location": "Phuket, Thailand",
    "rating": 4,
    "builtYear": 1665,
    "availability": "12-19 September",
    "chargePerNight": 19500,
    "type": "beachfront",
     "imageUrl": "https://imgs.search.brave.com/6NXTYyRayH7lD9Gz3mXy38cMFYW7cPJG67mvOTRPVnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bGRlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/U2hvcmUtSG91c2Ut/SGVyby1PY2VhbmZy/b250LVBvb2wtMjAw/MHgxMjAwLTEuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"19",
    "name": "Cozy Cabin Retreat",
    "location": "Banff National Park, Canada",
    "rating": 5,
    "builtYear": 1708,
    "availability": "4-11 October",
    "chargePerNight": 24500,
    "type": "cabins",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"20",
    "name": "Arctic Ice Haven",
    "location": "Arctic Circle",
    "rating": 4,
    "builtYear": 1635,
    "availability": "15-22 November",
    "chargePerNight": 21000,
    "type": "arctic",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"21",
    "name": "Riverside Retreat",
    "location": "Amazon Rainforest, Brazil",
    "rating": 5,
    "builtYear": 1700,
    "availability": "8-15 December",
    "chargePerNight": 26000,
    "type": "jungle",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"22",
    "name": "Underwater Haven",
    "location": "Great Barrier Reef, Australia",
    "rating": 4,
    "builtYear": 1755,
    "availability": "5-12 January",
    "chargePerNight": 22500,
    "type": "underwater",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"23",
    "name": "Mystic Meadows",
    "location": "Machu Picchu, Peru",
    "rating": 5,
    "builtYear": 1640,
    "availability": "18-25 February",
    "chargePerNight": 27000,
    "type": "mountains",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"24",
    "name": "Taj Mahal Palace",
    "location": "Agra, India",
    "rating": 4,
    "builtYear": 1678,
    "availability": "12-19 March",
    "chargePerNight": 20000,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"25",
    "name": "Safari Serenity",
    "location": "Maasai Mara, Kenya",
    "rating": 5,
    "builtYear": 1712,
    "availability": "2-9 April",
    "chargePerNight": 24500,
    "type": "safari",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"26",
    "name": "Greek Isles Retreat",
    "location": "Santorini, Greece",
    "rating": 4,
    "builtYear": 1685,
    "availability": "15-22 May",
    "chargePerNight": 18000,
    "type": "islands",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"27",
    "name": "Swiss Chalet",
    "location": "Interlaken, Switzerland",
    "rating": 5,
    "builtYear": 1730,
    "availability": "8-15 June",
    "chargePerNight": 25500,
    "type": "skiing",
     "imageUrl": "https://imgs.search.brave.com/Pg30bH_hv7Ra16-V02risORaIYEg9T95yxNx66H9njU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c25vLmNvLnVrL2lt/Zy9za2ktaG90ZWxz/L2hvbWUvRnJhbmNl/LUhvdGVscy1DbGVm/LWRlcy1jaGFtcHMu/anBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"28",
    "name": "Forest Cabin Hideaway",
    "location": "Black Forest, Germany",
    "rating": 4,
    "builtYear": 1662,
    "availability": "1-8 July",
    "chargePerNight": 21000,
    "type": "cabins",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"29",
    "name": "Desert Mirage",
    "location": "Sahara Desert, Morocco",
    "rating": 5,
    "builtYear": 1690,
    "availability": "14-21 August",
    "chargePerNight": 26500,
    "type": "desert",
     "imageUrl": "https://imgs.search.brave.com/anUR6EOpprDln582MVu8Gz6pHN79yLGeUb5RyzzWkR0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlbHV4/dXJ5dHJhdmVsZXhw/ZXJ0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMS9k/YW1hcmFsYW5kLWNh/bXAtbmFtaWJpYS1y/ZXZpZXcuanBnP3Jl/c2l6ZT0zMjYsMjQ1/JnNzbD0x",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"30",
    "name": "Beach Bungalow Bliss",
    "location": "Maldives",
    "rating": 4,
    "builtYear": 1673,
    "availability": "27-3 September",
    "chargePerNight": 19000,
    "type": "beachfront",
     "imageUrl": "https://imgs.search.brave.com/6NXTYyRayH7lD9Gz3mXy38cMFYW7cPJG67mvOTRPVnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bGRlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/U2hvcmUtSG91c2Ut/SGVyby1PY2VhbmZy/b250LVBvb2wtMjAw/MHgxMjAwLTEuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"31",
    "name": "Eiffel Tower View Suite",
    "location": "Paris, France",
    "rating": 5,
    "builtYear": 1758,
    "availability": "10-17 October",
    "chargePerNight": 23500,
    "type": "iconiccities",
     "imageUrl": "https://imgs.search.brave.com/lZL6mwB3_zNV9PYMUiKeX6jxBNwCX3gZe9cw7dDWxWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTg4YTBhNDFiYzM2/MjNlMjJjOWU4OWRj/L21hc3Rlci93XzMy/MCxjX2xpbWl0L3By/YWd1ZS1HZXR0eUlt/YWdlcy0xNTU2MDE5/ODMuanBn",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"32",
    "name": "Alaskan Wilderness Lodge",
    "location": "Denali National Park, USA",
    "rating": 4,
    "builtYear": 1683,
    "availability": "23-30 November",
    "chargePerNight": 22000,
    "type": "nationalparks",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  },
  {
    
    "id":"33",
    "name": "Haunted Mansion Retreat",
    "location": "Salem, USA",
    "rating": 5,
    "builtYear": 1705,
    "availability": "6-13 December",
    "chargePerNight": 27000,
    "type": "haunted",
     "imageUrl": "https://imgs.search.brave.com/UNV5impqGz11mjhYj1aHgnxn2WBe7f3GpwJrwnh3Rdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTUxOTEzL3Bob3Rv/L21hbGFoaWRlLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RjUzendo/RzhJYmJBN0ZWTFNs/SXIxekNFMzhJSmJ4/eVQwUlptTjk4NWlV/ND0",
    "imageUrl1": "https://imgs.search.brave.com/HJI0Qn0QvCBADgUbEhpU2pt2UIrWa-c0wI2igB17yPc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTI2MzM5L3Bob3Rv/L3Jlc29ydC1zd2lt/bWluZy1wb29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/UXR3SkMyYm9xM0dG/SGFlRHNLeXRGNC1D/YXZZS1F1eTFqQkQy/SVJmWUtjPQ",
    "imageUrl2": "https://imgs.search.brave.com/KpJ4SKKG8GJr5AKyhz5gxS0qtFNKIxp2_u42DW_4L-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMDAwMDAwLzIw/MDAwLzE4OTAwLzE4/ODk3LzBmMzQzNWM3/X3cuanBn",
    "imageUrl3": "https://imgs.search.brave.com/fa3zniTjnBwNdb1AcBzrrZV39MX_ZskhsyRCpnZMDSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "imageUrl4": "https://imgs.search.brave.com/lFq7WvtneLf_eBWVi_VOGrGM1SuuD41rcLO_5fFaV8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVjb3JpbGxhLmNv/bS9vbmxpbmUtZGVj/b3JhdGluZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9M/dXh1cnktaG90ZWwt/aW50ZXJpb3ItZGVz/aWduLUZvdXItc2Vh/c29ucy5qcGc"
  
  
  }
]

//haunted, nationalpark, desert, iconiccities, 
export default dummyData;

//castle, earthhomes, beachfront, lake, desert, camping, riads, hanoks, treehouse, skiing, boats, caves, iconiccities, farms, cabins, arctic, nationalparks