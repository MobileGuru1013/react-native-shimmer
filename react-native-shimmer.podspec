require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name            = 'react-native-shimmer'
  s.version         = version
  s.homepage        = 'https://github.com/oblador/react-native-shimmer'
  s.license         = "MIT"
  s.author          = { "Joel Arvidsson" => "joel@oblador.se" }
  s.summary         = 'Simple shimmering effect for React Native.'
  s.source          = { :git => 'https://github.com/oblador/react-native-shimmer.git', :tag => "v#{s.version}" }
  s.source_files    = 'ios/{,Shimmer/FBShimmering/}*.{h,m}'
  s.preserve_paths  = "**/*.js"
  s.requires_arc    = true
  s.platform        = :ios, "7.0"

  s.dependency 'React'
end
