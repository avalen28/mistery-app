const petArray = [{
    name: 'Kira', 
    gender: 'female', 
    age: 7, 
    type: 'German Sheperd',
    image: 'https://images.hola.com/imagenes/mascotas/20180823128631/cosas-que-quizas-no-sabias-de-tu-pastor-aleman-cs/0-593-146/cosassobrepastoraleman-t.jpg',
    needsMedicine: true, 
    description: 'Asshole like his owner',
    owner: '63cbcd297a96d8f8323546bf'
  },
  {
    name: 'Rex', 
    gender: 'male', 
    age: 3, 
    type: 'West Highland Terrier',
    image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fbregowesty.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fwesties.jpg',
    needsMedicine: true, 
    description: 'Asshole like his owner, also',
    owner: '63cbd96ca61fda3529bcad8a'
  },
  {
    name: 'Salchicha', 
    gender: 'male', 
    age: 4, 
    type: 'Dachshund',
    image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgs.search.brave.com%2FGC5fESH7EMbfm3ByM3r0JG2uYEQkbohByeY9D69Hr2g%2Frs%3Afit%3A1024%3A768%3A1%2Fg%3Ace%2FaHR0cDovL3BlcnJv%2FLXNhbGNoaWNoYS5j%2Fb20vd3AtY29udGVu%2FdC91cGxvYWRzLzIw%2FMjAvMDMvZm90by1j%2FYWNob3Jyby1kYWNo%2Fc2h1bmQtdGVrZWwt%2FcGVycm8tc2FsY2hp%2FY2hhLTAxMy5qcGc',
    needsMedicine: false, 
    description: 'Good at eating spaggeti',
    owner: '63cbcd297a96d8f8323546bf'
  },
  {
    name: 'Aimando', 
    gender: 'female', 
    age: 7, 
    type: 'German Sheperd',
    image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgs.search.brave.com%2FGIp6A4Rtm_PaL_rqDp7zsbpfD9_c6RxP8u3iV425MXM%2Frs%3Afit%3A1200%3A1200%3A1%2Fg%3Ace%2FaHR0cHM6Ly9pLnBp%2FbmltZy5jb20vb3Jp%2FZ2luYWxzL2RlLzIx%2FLzcwL2RlMjE3MDdi%2FZDAxZmNlYzJlMzI5%2FMGY2NDM0YzExZDRl%2FLmpwZw',
    needsMedicine: false, 
    description: 'Asshole like his owner',
    owner: '63cbd96ca61fda3529bcad8a'
  },
  {
    name: 'Pitbul', 
    gender: 'male', 
    age: 60, 
    type: 'Pitbul',
    image: 'https://files.slack.com/files-pri/T047BNNEQQH-F04KYFKU85R/captura_de_pantalla_2023-01-21_a_las_13.45.39.png',
    needsMedicine: true, 
    description: 'Yatusabe',
    owner: '63cbd96ca61fda3529bcad8a'
  },
  {
    name: 'Inu', 
    gender: 'female', 
    age: 4, 
    type: 'Shiba Inu',
    image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgs.search.brave.com%2FLKIDD5g_0iX4WW9yXu3-kPTbGWNijow8_MagWbaBwc0%2Frs%3Afit%3A1000%3A750%3A1%2Fg%3Ace%2FaHR0cHM6Ly9ub3Rh%2Fc2RlbWFzY290YXMu%2FY29tL3dwLWNvbnRl%2FbnQvdXBsb2Fkcy8y%2FMDE3LzA3L1NoaWJh%2FLUludS5qcGc',
    needsMedicine: false, 
    description: 'Cute AF',
    owner: '63cbcd297a96d8f8323546bf'
  },
  {
    name: 'Gatete', 
    gender: 'female', 
    age: 4, 
    type: 'Maine Coon',
    image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.boredpanda.es%2Fblog%2Fwp-content%2Fuploads%2F2016%2F08%2Fretratos-gatos-maine-coon-robert-sijka-9.jpg',
    needsMedicine: false, 
    description: 'Yur his bitch',
    owner: '63cbd96ca61fda3529bcad8a'
  },
  {
    name: 'Misifu', 
    gender: 'male', 
    age: 3, 
    type: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia-be.chewy.com%2Fwp-content%2Fuploads%2F2021%2F05%2F27131605%2Fbambino1440x865.jpg',
    image: '',
    needsMedicine: true, 
    description: 'Participates in hair loss products ads',
    owner: '63cbcd297a96d8f8323546bf'
  },
  {
    name: 'Garfiel', 
    gender: 'male', 
    age: 5, 
    type: 'Lasagna Cat',
    image: 'https://files.slack.com/files-tmb/T047BNNEQQH-F04KVLTDDD3-3551714ab6/image_720.png',
    needsMedicine: true, 
    description: 'Asshole',
    owner: '63cbd96ca61fda3529bcad8a'
  },
  {
    name: 'Africo', 
    gender: 'male', 
    age: 3, 
    type: 'Pitbull',
    image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgs.search.brave.com%2FjDVonxp5kK3ONqwyTWwWv_5SHsh2njAhkvLARGxsKMc%2Frs%3Afit%3A1200%3A1000%3A1%2Fg%3Ace%2FaHR0cHM6Ly80LmJw%2FLmJsb2dzcG90LmNv%2FbS8teFRFanM1Vmk0%2FdjQvVUQtUlQyeTll%2FRkkvQUFBQUFBQUFp%2FMzAvdndma3NOOWZL%2FdkUvczE2MDAvUGVy%2Fcm8tUGl0YnVsbF9G%2Fb25kb3MtZGUtUGFu%2FdGFsbGEtSEQtZGUt%2FUGVycm9zLmpwZw',
    needsMedicine: false, 
    description: 'Asshole like his owner',
    owner: '63cbcd297a96d8f8323546bf'
  }]


module.exports = petArray;