from os import listdir
import re

root_path = "."
project_path = "/projects"


templates = [
    {
        "begin_tag": "<!-- project-head-begin -->",
        "end_tag":   "<!-- project-head-end -->",
        "template_path": "/data/templates/project-head-template.html",
        "template": None,
        "begin_tag_index": -1,
        "end_tag_index": -1,
    },
]

paths = listdir(root_path + project_path)

for path in paths:
    
    for template in templates:
        
        template["begin_tag_index"] = -1
        template["end_tag_index"] = -1

        if(template["template"] is None):
            with open(root_path + template["template_path"], "r", encoding="utf-8") as f:
                template["template"] = f.readlines()

        need_write = False
        new_lines = []

        if path.endswith(".html"):
            print(path)
            with open(root_path + project_path + "/" + path, "r", encoding="utf-8") as f:

                lines = f.readlines()

                index = 0
                for line in lines:
                    
                    line_strip = line.strip()
                    if(line_strip == template["begin_tag"]):
                        template["begin_tag_index"] = index
                    elif(line_strip == template["end_tag"]):
                        template["end_tag_index"] = index
                        break

                    index = index + 1

                if(template["begin_tag_index"] > 0 and template["end_tag_index"] >0):
                    new_lines.extend(lines[0:template["begin_tag_index"]+1])
                    new_lines.extend(template["template"])
                    new_lines.extend(lines[template["end_tag_index"]:])
                    need_write = True
            
            if(need_write):
                with open(root_path + project_path + "/" + path, "w", encoding="utf-8") as f:
                    f.writelines(new_lines)
                    
 