const firebase = require('firebase-admin');


firebase.initializeApp({databaseURL: 'https://clinictest-f5c5b-default-rtdb.firebaseio.com',
credential: firebase.credential.cert({
	apiKey: "AIzaSyDVs9YqsF6DoYRKPuDcoLnbmnzhZkjEtW4",
	authDomain: "clinictest-f5c5b.firebaseapp.com",
	databaseURL: "https://clinictest-f5c5b-default-rtdb.firebaseio.com",
	projectId: "clinictest-f5c5b",
	storageBucket: "clinictest-f5c5b.appspot.com",
	messagingSenderId: "340433214188",
	appId: "1:340433214188:web:23c7e4ae890fcea255a3c9",
	client_email: "firebase-adminsdk-ni5nz@clinictest-f5c5b.iam.gserviceaccount.com",
	private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzShD6GlMPI1Bf\nNxXMSITrOpCIIYu7erWR6oyl0qCN/yATPnHMcFgXyMjMP7T4k0Xze8IMK7tVrrX2\n8EJTDAEKOpgLiKlCPMUbe5tvYyEkBOkRpNw3NBU9j+lFxwqdCGj30y9ImtnHHJA5\nnX25YxforAX71WIvHFX4/JW6mRx2KVQtFHNYUDCmT8wKf+UJD1oAuQ7nOsdnn3rj\n6MFv4Q2eh/EH9M8jbiYgOs6I/8wQNJsNcn+7wdFZXMHHpN9CO4r4hOyCQ4u4QYrU\nVcvypUPteGJtUgRDclwloggCRREDePG0jrA4zVJGYm6Ga11cOSBsRpI3s14sy1xi\nIJ7/zAi7AgMBAAECggEASB8EQ0dxoAZJn3OuPhXx+hn95/Tum8UZ4w+h8laPJW+6\nfGNDLcUHetHXDGqYJuI/YlmnTnQNEMOOCT7Ov09136KAZStdQvrlI1AOz7jlrPKY\nuvNBbqdx3+jTIrGVsGOgrghy3dcEwdbYoYSb/YZCKOOCKLLGo0LXxqf8pypOS61Z\n/Rf/MmcSI4Ft8Tkba4M5hbYvOPScF6mGMJvANGRl1UJNEInmhYqDJOia+H1WOezV\n3A7g5Bae+UfAVS8aewTVkuzZf1jLrKq48cotzzZmI4+SRX4FTmedTBLHHN6HuwbJ\nu1K2MI3ngoFsb+vORLrcyvLmXzyZbWIVkkW7lUH3WQKBgQDacGTvHF2bcpcW4sBh\nF0hIhbj6uyRTMv+VONgYPI4/FqJqzjuHVzUvEg9OtqpItsJCVJEAlZcApqNz6YqS\nVRjdztEYAu2wSoXGur0lWtbX+pRI5DfKC02Xw/yM3hp/BqoQpGYHnayIM/U4+vf7\nFt0YskCQiXruLJhGMnfM1c+QRwKBgQDSHlDf2X/Hct0oJEB3NTYZRNtiFqr1FOxc\nE+asmQkyyURTV/Z8U+OBW+pNu8h4POqYQnGGRGuh+0O491iT49ldkU9rJ7bHOeUA\nO42Qrp/JvmEHKZsUPLLa7rOZMHGlWFNGiZ/IdD76mforIbM9IeojseiNH4YWKJ6m\ntIu4QZtR7QKBgQCnLS/CZDYr2wZRSJctd3Elt9n7YrCJUFWU8d1Ip0fCduM01MNw\ncEjOzoaSmnA2mFCSDUCwbswTfnVIJ+ua1K/kSf1y4ALjUhWSI6bQ6PXWc/t60db0\ntbPbu+4ULYOfxgzwEbHYkE7UKte5lTGmpDfwR7PsKpu/nrenucZAKT7izwKBgBm0\nDa6ke6YZXgZ4EM7EWp7StoeUQEuEyLkm0hQREHf++PW9D/D7jhwX81yY+RgEU6pW\njm6fVg9Vnl41G8fTmpaAnRd9nzVV1ralkla9ldxnBpWKuGbMWhDAHIZDz9MrL9y0\nHzC1T7L2PQ0jrTpwOKUvMUR6M7voMigwc9sRY3+tAoGAY2YwyD/vR4TcxoKsLKnw\nTerEYLggZVYLvFeP7CN1fWgY2BHav9Ujhnbdh3+xAtNtw4qYfjzVq8BvWJ8ZDx2i\nMrm4QasR6o/hApJjfOoTeS+2G+7OVKXm0/rZPHslHRqvzTo0twBJwLGUMNQrGQ1i\n4Ex7z7hKSAU+zDsnXD8qzH4=\n-----END PRIVATE KEY-----\n"
	})
});

module.exports = firebase;


