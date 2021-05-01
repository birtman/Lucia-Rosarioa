module.exports = {
  siteMetadata: {
    title: 'Lucia Rosarios Psychotherapy',
    description: "English and Spanish speaking therapist with a focus in Systemic, Strategic and Brief Psychotherapy.",
    keywords: "English, Coach, Session, Spanish, Spanish speaking, Bilingual, Treatment, Psychologist, Virtual, Online, Crisis, Marriage, Jealousy, Split, Divorce, Verified, Stress, Calm, Nerves, Web, Anxiety, Overcoming, Solution, Sexologist, Psychotherapist, Latin, Distress, Sad, Distance, Depression, Experienced, Development, Couple, Talking, Self esteem, Grief, Phobia, Fear, OCD, Help, Cheating, Councellor, Loneliness, Family, Expat, Berlin, Adapting, Personal, Growth, Licensed"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "yxy2z4tjv9yd",
        accessToken: "QsXgHU_mfOCGq9WVu-0RM27LA6CVw8iRlTMM59eXOF0"
      }
    }
  ],
}
