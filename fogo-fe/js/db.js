const account = {
    "user": [
        {
            "username": "user1",
            "phone": "0865510025",
            "password": "123123"
        }
    ],
    "admin": {
        "username": "admin",
        "password": "admin"
    }
}

const roomData =
{
    "data": [
        {
            "id": "1",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 30,
            "gender": "any",
            "price": 3000000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597055816787_IMG_1596798089064_1597055634473.jpg"
        },
        {
            "id": "2",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 32,
            "gender": "any",
            "price": 3200000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597900594925_FB_IMG_1597900205158.jpg"
        },
        {
            "id": "3",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 25,
            "gender": "any",
            "price": 4000000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597900442421_FB_IMG_1597809931053.jpg"
        },
        {
            "id": "4",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 25,
            "gender": "any",
            "price": 2500000,
            "address": "*** Nguyễn Khuyến, Phường Văn Quán, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597640475917_IMG_4002.JPG"
        },
        {
            "id": "5",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 30,
            "gender": "any",
            "price": 3000000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597638896017_IMG_2378.JPG"
        },
        {
            "id": "6",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 30,
            "gender": "any",
            "price": 3000000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597600129133_IMG_6465.JPG"
        },
        {
            "id": "7",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 42,
            "gender": "any",
            "price": 3200000,
            "address": "*** Yên Xá, Phường Văn Quán, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597462515979_FB_IMG_1597460730692.jpg"
        },
        {
            "id": "8",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 30,
            "gender": "any",
            "price": 3000000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597461913103_IMG_20200815_102506.jpg"
        },
        {
            "id": "9",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 42,
            "gender": "any",
            "price": 2900000,
            "address": "*** Yên Xá, Phường Văn Quán, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208703_IMG_1589337151324_1589345586881.jpg"
        },
        {
            "id": "10",
            "name": "Chung cư hồ Gươm",
            "type": "Phòng cho thuê",
            "area": 30,
            "gender": "any",
            "price": 3200000,
            "address": "*** Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Hà Nội",
            "image": "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725953_IMG_8842.HEIC"
        }
    ],
}

const details =
    [
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": true,
                "fridge": false,
                "washingMachine": false,
                "waterHeater": true,
                "bed": true,
                "closet": true,
                "petsAllowed": true,
                "television": false,
                "garret": true,
                "window": true,
                "balcony": false,
                "cookingAllowed": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597055816787_IMG_1596798089064_1597055634473.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597055820589_IMG_1596798080401_1597055637605.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597055825367_IMG_1596798121048_1597055631225.jpg"
            ],
            "id": "1",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 4,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": true,
                "wifi": false,
                "liveWithOwner": false,
                "fridge": true,
                "washingMachine": true,
                "waterHeater": true,
                "bed": true,
                "closet": false,
                "petsAllowed": true,
                "television": true,
                "garret": true,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900599809_FB_IMG_1597900207398.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900603988_FB_IMG_1597900210231.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900606760_FB_IMG_1597900213308.jpg"
            ],
            "id": "2",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": false,
                "wifi": true,
                "liveWithOwner": true,
                "fridge": true,
                "washingMachine": true,
                "waterHeater": false,
                "bed": true,
                "closet": true,
                "petsAllowed": true,
                "television": true,
                "garret": false,
                "window": false,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900442421_FB_IMG_1597809932902.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900442421_FB_IMG_1597809929029.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900442421_IMG_1597806081505_1597810852621.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597900442421_FB_IMG_1597809925625.jpg"
            ],
            "id": "3",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": false,
                "fridge": false,
                "washingMachine": true,
                "waterHeater": true,
                "bed": true,
                "closet": true,
                "petsAllowed": true,
                "television": true,
                "garret": true,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597640475916_IMG_2911.JPG",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597640475917_IMG_2930.JPG",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597640475918_IMG_2931.JPG"
            ],
            "id": "4",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": false,
                "bathroom": true,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": false,
                "fridge": true,
                "washingMachine": true,
                "waterHeater": true,
                "bed": true,
                "closet": false,
                "petsAllowed": true,
                "television": true,
                "garret": true,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597638896023_IMG_2377.JPG",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597638896024_IMG_2375.JPG",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597638896024_IMG_2376.JPG"
            ],
            "id": "5",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": false,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": true,
                "fridge": true,
                "washingMachine": true,
                "waterHeater": false,
                "bed": true,
                "closet": true,
                "petsAllowed": true,
                "television": true,
                "garret": false,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597600129132_IMG_6466.JPG",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597600129133_IMG_6467.JPG",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597600129133_IMG_6469.JPG"
            ],
            "id": "6",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": false,
                "fridge": true,
                "washingMachine": true,
                "waterHeater": true,
                "bed": true,
                "closet": false,
                "petsAllowed": true,
                "television": true,
                "garret": true,
                "window": false,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597462518593_FB_IMG_1597460733288.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597462521166_FB_IMG_1597460726272.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597462524197_FB_IMG_1597460735858.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597462528984_FB_IMG_1597460721369.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597462532124_FB_IMG_1597460723840.jpg"
            ],
            "id": "7",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": false,
                "wifi": false,
                "liveWithOwner": true,
                "fridge": true,
                "washingMachine": true,
                "waterHeater": true,
                "bed": true,
                "closet": false,
                "petsAllowed": true,
                "television": true,
                "garret": true,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597461917443_IMG_20200815_102504.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597461920983_IMG_20200815_102502.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597461968776_IMG_20200815_102504.jpg"
            ],
            "id": "8",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": true,
                "fridge": false,
                "washingMachine": true,
                "waterHeater": true,
                "bed": false,
                "closet": false,
                "petsAllowed": false,
                "television": false,
                "garret": true,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152626_1589345586160.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152629_1589345585946.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152801_1589345585531.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152832_1589345586530.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152374_1589345586712.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152830_1589345586329.jpg",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1589377208702_IMG_1589337152213_1589345586747.jpg"
            ],
            "id": "9",
            "status": "Còn phòng"
        },
        {
            "owner": {
                "name": "Dương",
                "phoneNumber": "0368887510"
            },
            "address": {
                "city": {
                    "code": 2,
                    "text": "Hà Nội"
                },
                "district": {
                    "code": 34,
                    "text": "Hà Đông"
                },
                "ward": {
                    "code": 515,
                    "text": "Mỗ Lao"
                },
                "street": "Trần Phú",
                "houseNumber": "102"
            },
            "details": {
                "price": {
                    "value": 3.5,
                    "unit": "phòng"
                },
                "additionalFee": {
                    "electric": {
                        "value": 3.5,
                        "unit": "số"
                    },
                    "water": {
                        "value": 20,
                        "unit": "số"
                    },
                    "other": "phí dịch vụ 200k/người"
                },
                "gender": "any",
                "deposit": "1 tháng",
                "type": "Shared",
                "note": "✳ Tiện ích :\n- Free nước, wifi, nước uống chỉ tính điện ( chia ra theo số người trong phòng )\n- Phòng có máy lạnh phà phà\n- Mỗi khách 1 Sleep Box gồm có : Tủ đựng đồ, quần áo; nệm, gối, ổ cắm điện,... Mỗi phòng từ 4 - 8 Sleep Box.\n- Toilet riêng trong phòng\n- Có bếp riêng trong phòng đầy đủ tiện nghi ( tủ lạnh, lò vi sóng, bếp điện,.. )\n- Máy giặt, sân phơi và toilet dự phòng.\n- Hệ thống Camera và Mã hóa vân tay.",
                "area": 20,
                "capacity": 3
            },
            "utils": {
                "airConditioner": true,
                "bathroom": true,
                "parkingArea": true,
                "wifi": true,
                "liveWithOwner": true,
                "fridge": true,
                "washingMachine": false,
                "waterHeater": true,
                "bed": true,
                "closet": false,
                "petsAllowed": true,
                "television": false,
                "garret": true,
                "window": true,
                "balcony": true
            },
            "disabled": true,
            "images": [
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725953_IMG_8488.HEIC",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725953_IMG_8490.HEIC",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725954_IMG_8844.HEIC",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725954_IMG_8852.HEIC",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725953_IMG_8487.HEIC",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725953_IMG_8838.HEIC",
                "https://bayleaf.s3.amazonaws.com/property-images%2F1597451725952_IMG_8867.JPG"
            ],
            "id": "10",
            "status": "Còn phòng"
        }
    ]