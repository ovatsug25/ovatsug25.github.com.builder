# module Jekyll
#
#   class DefaultTemplatePage < Page
#     def initialize(site, base, dir, layout)
#       @site = site
#       @base = base
#       @dir = dir
#
#       self.layout = File.join("_layouts", layout)
#     end
#   end
#
#   class DefaultPageGenerator < Generator
#     safe true
#
#     def generate(site)
#       site.static_files.each do |sf|
#         if sf.path.to_s.match(/poems/)
#           dir = sf.path.to_s.sub(Dir.pwd, "")
#           site.pages << DefaultTemplatePage.new(site, site.source, dir, 'sidebar.html')
#         elsif sf.path.to_s.match(/success-guide/)
#           dir = sf.path.to_s.sub(Dir.pwd, "")
#           site.pages << DefaultTemplatePage.new(site, site.source, dir, 'sidebar.html')
#         elsif sf.path.to_s.match(/assets|images|404|500|data/)
#           ""
#         else
#           puts "Not templated: #{sf.path}"
#         end
#       end
#     end
#   end
#
# end
