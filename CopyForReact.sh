mkdir "$1"_temp
cd "$1"_temp
curl -O https://storage.googleapis.com/material-icons/external-assets/v4/icons/zip/ic_"$1"_white_48dp.zip
unzip ic_"$1"_white_48dp.zip
cp ic_"$1"_white_48dp/android/drawable-mdpi/ic_"$1"_white_48dp.png icon.android.png
cp ic_"$1"_white_48dp/android/drawable-hdpi/ic_"$1"_white_48dp.png icon@1.5.android.png
cp ic_"$1"_white_48dp/android/drawable-xhdpi/ic_"$1"_white_48dp.png icon@2.android.png
cp ic_"$1"_white_48dp/ios/ic_"$1"_white_48pt.imageset/ic_"$1"_white_48pt.png icon.ios.png
cp ic_"$1"_white_48dp/ios/ic_"$1"_white_48pt.imageset/ic_"$1"_white_48pt_2x.png icon@2x.ios.png
cp ic_"$1"_white_48dp/ios/ic_"$1"_white_48pt.imageset/ic_"$1"_white_48pt_3x.png icon@3x.ios.png
mkdir "$1"
mv *.png "$1"/
rm -r ../App/Images/"$1"
mv "$1" ../App/Images/
cd ../
rm -r "$1"_temp
