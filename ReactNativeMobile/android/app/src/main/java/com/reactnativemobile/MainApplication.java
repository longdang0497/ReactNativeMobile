package com.reactnativemobile;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication, ShareApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new LottiePackage(),
            new RNCWebViewPackage(),
            new RNViewShotPackage(),
            new VectorIconsPackage(),
            new RNSharePackage(),
            new MapsPackage(),
            new ImagePickerPackage(),
            new CookieManagerPackage()
            );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public String getFileProviderAuthority() {
    return "com.reactnativemobile.provider";
  }


  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
